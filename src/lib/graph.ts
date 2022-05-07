// type GraphNode = IObjectGraphNode | IArrayGraphNode;

interface IGraphNode {
  type?: "object" | "array";
  fieldName?: string | RegExp;
  children: string[];
  result?: string;
}

// interface IArrayGraphNode {
//   key: string;
//   children: GraphNode[];
// }

const graphConfig: Record<string, IGraphNode> = {
  config: {
    children: ["op_component_config"]
  },
  op_component_config: {
    children: ["features"]
  },
  features: {
    type: "array",
    children: ["rank_list_config", "task_config"]
  },
  rank_list_config: {
    children: ["sub_ranklists"]
  },
  sub_ranklists: {
    type: "array",
    children: ["activity_value_calculators", "sub_ranklists_lv2"],
    result: "tabInfo"
  },
  sub_ranklists_lv2: {
    type: "array",
    fieldName: "sub_ranklists",
    children: ["activity_value_calculators"],
    result: "subTabInfoList"
  },
  task_config: {
    children: ["task_items"]
  },
  task_items: {
    type: "array",
    children: ["task_phases"]
  },
  task_phases: {
    type: "array",
    children: ["task_conditions"]
  },
  task_conditions: {
    type: "array",
    children: ["condition_value", "condition_type", "condition_op"]
  },
  condition_value: {
    children: [],
    result: "tabInfo.1.subTabInfoList.0.activity_value_calculators.0.factor"
  },
  condition_type: {
    children: []
  },
  condition_op: {
    children: []
  }
};

function visit(
  graphConfig: Record<string, IGraphNode>,
  node: IGraphNode,
  pathList: string[],
  result: string[]
) {
  const childrenResult = node.children;
  if (childrenResult.length) {
    if (pathList.length && childrenResult.includes(pathList[0])) {
      const nextNode = graphConfig[pathList[0]];
      const nextResultList = node.result ? [...result, node.result] : result;
      return visit(graphConfig, nextNode, pathList.slice(1), nextResultList);
    }
  } else {
    return null;
  }
}

export function graphBuilder() {
  // graphConfig: Record<string, Omit<IGraphNode, "key">>,
  // path: string
  const pathTemp =
    "config.op_component_config.features.0.ranklist_config.sub_ranklists.1.sub_ranklists.0.activity_value_calculators.0.factor";
  const pathList = pathTemp.split(".");
  if (pathList.length) {
    const firstField = pathList[0];
    // firstNode's field name must be identical to the key
    const firstNode = graphConfig[firstField];
    return visit(graphConfig, firstNode, pathList.slice(1), []);
  }
  return null;
}
