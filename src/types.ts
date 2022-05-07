export interface IMapRule {
  pattern: RegExp;
  result: string;
}

export interface ITestCase {
  path: string;
  feature_type: number;
  fe_id: string;
  message: string;
}
