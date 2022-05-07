import { IMapRule } from "./types";

const replaceNthGroup = (str: string, locationList: string[]) => {
  let nth = 0;
  return str.replace(/\(\\d\)|{.+}/g, function (match, i, original) {
    nth++;
    locationList.includes(nth.toString());
    return locationList.includes(nth.toString())
      ? "$" + (locationList.indexOf(nth.toString()) + 1)
      : match;
  });
};

const patternToResult: (rule: IMapRule) => string = (rule) => {
  const ruleStr = rule.pattern;
  const locationList = rule.result.match(/\$\d+/g);

  let newStr = ruleStr;
  newStr = replaceNthGroup(
    newStr,
    locationList?.map((loc) => loc.slice(1)) ?? []
  );

  newStr = newStr.replace(/\(\\d\)/g, "0");
  newStr = newStr.replace(/[\\/]|g$/g, "");

  return newStr;
};

const resultToPattern: (rule: IMapRule) => string = (rule) => {
  let newRuleStr = rule.result;
  newRuleStr = newRuleStr.replace(/\$\d+/g, "(\\d)");
  return newRuleStr;
};

export const reverseRule: (rule: IMapRule) => IMapRule = (rule) => {
  return {
    pattern: resultToPattern(rule),
    result: patternToResult(rule)
  };
};
