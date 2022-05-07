export const regexStrToRegex = (str: string) => {
  let newStr = str;
  newStr = str.replace(/\./g, "\\.");
  newStr = str.replace(/{.+}/g, "(.+)");
  return new RegExp(newStr, "g");
};
