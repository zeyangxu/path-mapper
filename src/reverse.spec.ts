import mapRules from "./rules";
import { reverseRule } from "./reverse";

describe("reverseRule", () => {
  test("base case", () => {
    expect(mapRules.map(reverseRule)).toMatchObject([
      {
        result:
          "config.op_component_config.features.{featureIndex}.task_config.task_items.$1.anchor_conditions.0",
        pattern: "basicInfo.conditions.(\\d)"
      },
      {
        result:
          "config.op_component_config.features.{featureIndex}.task_config.task_items.$1.task_phases.0.task_conditions.$2.condition_value",
        pattern:
          "{taskTypeName}.tasks.(\\d).conditions.(\\d).{conditionType}-condition_value"
      },
      {
        result:
          "config.op_component_config.features.{featureIndex}.ranklist_config.sub_ranklists.$1.activity_value_calculators.$2.factor",
        pattern: "tabInfo.(\\d).activity_value_calculators.(\\d).factor"
      },
      {
        result:
          "config.op_component_config.features.{featureIndex}.ranklist_config.sub_ranklists.$1.sub_ranklists.$2.activity_value_calculators.$3.factor",
        pattern:
          "tabInfo.(\\d).subTabInfoList.(\\d).activity_value_calculators.(\\d).factor"
      }
    ]);
  });
});
