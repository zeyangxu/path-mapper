import { IMapRule } from "./types";

const mapRules: IMapRule[] = [
  {
    pattern: /config\.op_component_config\.features\.(\d)\.task_config\.task_items\.(\d)\.anchor_conditions\.(\d)/g,
    result: "basicInfo.conditions.$2"
  },
  {
    pattern: /config\.op_component_config\.features\.(\d)\.task_config\.task_items\.(\d)\.task_phases\.(\d)\.task_conditions\.(\d)\.condition_value/g,
    result:
      "{taskTypeName}.tasks.$2.conditions.$4.{conditionType}-condition_value"
  },
  {
    pattern: /config\.op_component_config\.features\.(\d)\.ranklist_config\.sub_ranklists\.(\d)\.activity_value_calculators\.(\d)\.factor/g,
    result: "tabInfo.$2.activity_value_calculators.$3.factor"
  },
  {
    pattern: /config\.op_component_config\.features\.(\d)\.ranklist_config\.sub_ranklists\.(\d)\.sub_ranklists\.(\d)\.activity_value_calculators\.(\d)\.factor/g,
    result: "tabInfo.$2.subTabInfoList.$3.activity_value_calculators.$4.factor"
  }
];

export default mapRules;
