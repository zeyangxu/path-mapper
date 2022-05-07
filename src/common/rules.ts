import { IMapRule } from "./types";

/**
 * 路径映射DSL
 * pattern：类似regex，使用{name}占位需要外部信息决定的字段，使用(\\d)标识 index
 * result：映射的结果，使用 $n 表示pattern里面的 capturing group序号
 * */
const mapRules: IMapRule[] = [
  {
    pattern:
      "config.op_component_config.features.{featureIndex}.task_config.task_items.(\\d).anchor_conditions.(\\d)",
    result: "basicInfo.conditions.$2"
  },
  {
    pattern:
      "config.op_component_config.features.{featureIndex}.task_config.task_items.(\\d).task_phases.(\\d).task_conditions.(\\d).condition_value",
    result:
      "{taskTypeName}.tasks.$2.conditions.$4.{conditionType}-condition_value"
  },
  {
    pattern:
      "config.op_component_config.features.{featureIndex}.ranklist_config.sub_ranklists.(\\d).activity_value_calculators.(\\d).factor",
    result: "tabInfo.$2.activity_value_calculators.$3.factor"
  },
  {
    pattern:
      "config.op_component_config.features.{featureIndex}.ranklist_config.sub_ranklists.(\\d).sub_ranklists.(\\d).activity_value_calculators.(\\d).factor",
    result: "tabInfo.$2.subTabInfoList.$3.activity_value_calculators.$4.factor"
  }
];

export default mapRules;
