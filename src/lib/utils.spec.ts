import { regexStrToRegex } from "./utils";
import mapRules from "../common/rules";

describe("utils", () => {
  describe("regexStrToRegex", () => {
    test("", () => {
      expect(regexStrToRegex(mapRules[1].pattern).toString()).toBe(
        "/config.op_component_config.features.(.+).task_config.task_items.(\\d).task_phases.(\\d).task_conditions.(\\d).condition_value/g"
      );
    });
  });
});
