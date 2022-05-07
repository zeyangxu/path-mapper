import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { IMapRule, ITestCase } from "../common/types";
import { regexStrToRegex } from "./utils";

enum ConditionKey {
  SINGLE = "singleConditionInfo",
  PARALLEL = "multipleConditionInfo",
  MULTI_STAGE = "multipleStageConditionInfo"
}

export enum OpenActivityTaskType {
  SingleTask = 1,
  ParallelTask = 2,
  SingleTaskMultiPhase = 3
}

const TaskTypeMap = {
  [OpenActivityTaskType.SingleTask]: ConditionKey.SINGLE,
  [OpenActivityTaskType.ParallelTask]: ConditionKey.PARALLEL,
  [OpenActivityTaskType.SingleTaskMultiPhase]: ConditionKey.MULTI_STAGE
};

/** 对于一些需要额外信息才能确定的字段进行适配 */
const replaceExtendedVariable = (
  regexRes: RegExpExecArray | null,
  result: string,
  activityInfo: any
) => {
  if (!regexRes) return;

  const taskType: OpenActivityTaskType =
    get(
      activityInfo,
      `config.op_component_config.features.${regexRes[1]}.task_config.task_type`
    ) ?? OpenActivityTaskType.SingleTask;

  const conditionType = get(
    activityInfo,
    regexRes[0].replace(".condition_value", ".condition_type")
  );

  // 扩展字段映射
  const mapping: Record<string, ConditionKey | string> = {
    taskTypeName: TaskTypeMap[taskType],
    conditionType: conditionType
  };

  // 替换扩展字段
  let newResult = result;
  Object.keys(mapping).forEach((key) => {
    newResult = newResult.replace(`{${key}}`, mapping[key]);
  });
  return newResult;
};

export const mapConfigToFormPath = (
  mapRules: IMapRule[],
  testCase: ITestCase[],
  activityInfo: any
) => {
  return testCase
    .map((tcase) => {
      return mapRules.map((rule) => {
        const pattern = regexStrToRegex(rule.pattern);
        const execArray = pattern.exec(tcase.path);
        if (!execArray) return null;

        const replaceRes = tcase.path.replace(pattern, rule.result);

        const extendedReplaceRes = replaceExtendedVariable(
          execArray,
          replaceRes,
          activityInfo
        );

        if (execArray && replaceRes) {
          return {
            ...tcase,
            path: extendedReplaceRes
            // path: rule.result(res, activityInfo)
          };
        }
        return null;
      });
    })
    .flat()
    .filter((item: any) => !isEmpty(item));
};
