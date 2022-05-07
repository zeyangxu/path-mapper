import { mapConfigToFormPath } from "./path";
import mapRules from "../common/rules";

describe("mapConfigToFormPath", () => {
  const activityInfo = {
    short_id: "18430",
    activity_id: "7090870711388506885",
    activity_show_name: "【自动化测试专用】单任务-副本",
    activity: "op_component-open-2-7090870711388506885",
    activity_type: 2,
    description: "ttt",
    live_ids: [12],
    owner: "xuzeyang",
    creator: "xuzeyang",
    modifier: "xuzeyang",
    collaborators: ["lizhaoji"],
    activity_status: 11,
    offset_time: "0",
    start_time: "1646668800000",
    end_time: "1648742399000",
    warm_up_start_time: "1646668800000",
    show_result_end_time: "1648742399000",
    create_time: "1651136616000",
    update_time: "1651738350000",
    activity_now: "1651739945051",
    language: "en",
    allowed_countries: '["US"]',
    allowed_countries_split: '["US"]',
    time_zone: "+8:00",
    meego_link: "https://meego.feishu.cn/tiktok_live/story/detail/4763903",
    sdlc_status: -1,
    platform_flag: 1,
    client_activity_status: 3,
    activity_kind_flag: 2,
    page_visual_type: 1,
    version: "59",
    is_case_activity: false,
    activity_id_copied_from: "7072251714099530501",
    config: {
      op_component_config: {
        features: [
          {
            feature_type: 3,
            feature_fe_id: "3xHG0PBT",
            ranklist_config: {
              level_type: 1,
              sub_ranklist_split_type: 1,
              sub_ranklists: [
                {
                  conditions: [{}],
                  activity_value_calculators: [
                    {
                      factor: "undefined",
                      criteria: {}
                    }
                  ]
                }
              ],
              hide_ranklist_score: false,
              hide_user_nickname: false,
              hide_profile_page: false
            }
          },
          {
            feature_type: 2,
            feature_fe_id: "qnDUIsKm",
            task_config: {
              task_role_type: 1,
              task_visibility: 1,
              task_type: 2,
              task_items: [
                {
                  interval_type: 4,
                  anchor_condition_logic_op: 0,
                  task_phase_type: 1,
                  task_phases: [
                    {
                      name: "qnDUIsKm",
                      task_conditions: [
                        {
                          condition_type: 174,
                          condition_op: 5,
                          condition_value: 808,
                          criteria: {}
                        }
                      ],
                      task_rewards: [
                        {
                          reward_id: "2:qnDUIsKm:0-0:0",
                          extra: '{"type":-1,"config":{}}'
                        }
                      ]
                    }
                  ],
                  task_repeat_limit: 1
                },
                {
                  interval_type: 4,
                  anchor_condition_logic_op: 0,
                  task_phase_type: 1,
                  task_phases: [
                    {
                      name: "qnDUIsKm",
                      task_rewards: [
                        {
                          reward_id: "2:qnDUIsKm:1-0:0",
                          extra: '{"type":-1,"config":{}}'
                        }
                      ]
                    }
                  ],
                  task_repeat_limit: 1
                }
              ],
              header_abandon: false
            }
          }
        ],
        free_module: {}
      },
      op_budget_config: {
        compliance_screenshot_urls: [
          "https://p-tiktokyoyo-boei18n.byteintl.net/tos-boei18n-i-o7x0oc440d/bd8605c5d0fb468fa5d95c879334be18~tplv-o7x0oc440d-default:0:0:q70.png?width=690&height=180"
        ],
        description: "ttt",
        amount: 999999,
        alarm_threshold: 99,
        version: 0
      },
      enable_dynamic_banner: false
    },
    dispatcher_config: {
      common_config: {
        serial_id: 11,
        interval: "",
        feature_cluster: ""
      }
    },
    rep_config:
      '{"pageInfo":{"bgPrimaryColor":"#00BCD4"},"componentsInfo":[{"children":[],"value":{"basicInfo":{"sub_ranklist_split_type":1,"bottomBarBgColor":"#106EFF","bottomBarTextColor":"#FFFFFF"},"displaySettings":{"backgroundColor":"#ffffff","backgroundRadius":0,"rankIcon1":[],"rankIcon2":[],"rankIcon3":[],"avatarColor":"#d940ff","textColor":"#000000"},"tabInfo":{"0":{"conditions":[{}],"activity_value_calculators":[{"condition_attributes":{}}],"rewards":[{"reward_items":[{}]}],"bgImage":[],"showRule":true,"ruleImage":[]}}},"key":"1651735801686","feature_fe_id":"3xHG0PBT","group":"list_components","type":"live-single-rank-list","name":"single_tier_list","jsUrl":{"sg":"https://lf16-campaign.ttlstatic.com/obj/ttlive-campaign-sg/ies/resource/falcon/tiktok_fusion_component/single-rank-list/live-single-rank-list-index.09d3a1ecb1ffd1b9aea8.js","va":"https://lf16-campaign.ttlstatic.com/obj/ttlive-campaign-us/ies/resource/falcon/tiktok_fusion_component/single-rank-list/live-single-rank-list-index.f0d25ef22f173d4c6af3.js"}},{"children":[],"value":{"props":{"basicInfo":{"task_type":2,"task_role_type":1,"conditions":[{}],"task_visibility":1},"singleConditionInfo":{"tasks":[{"conditions":[{}],"rewards":[{}]}]},"multipleConditionInfo":{"tasks":[{"conditions":[{"158-condition_attributes":{},"169-condition_attributes":{},"170-condition_attributes":{},"171-condition_attributes":{},"condition_type":174}],"rewards":[{}],"itemKey":"0"},{"conditions":[{"158-condition_attributes":{},"169-condition_attributes":{},"170-condition_attributes":{},"171-condition_attributes":{}}],"rewards":[{}],"itemKey":"1"}]},"multipleStageConditionInfo":{"tasks":[{"conditions":[{}],"rewards":[{}]}]},"displayInfo":{"titleColor":"#FFFFFF","descType":0,"conditionTextColor":"#BBBBBB","conditionColor":"#000000","currentProgressBarColor":"#106EFF","totalProgressBarColor":"#CCCCCC"}}},"key":"1651737920840","feature_fe_id":"qnDUIsKm","group":"task_component","type":"live-single-tab-task","name":"only_live_streaming_host/user_tasks","jsUrl":{"sg":"https://cdn-tos-sg.byteintl.net/obj/archi-sg/ies/resource/falcon/tiktok_fusion_component/development/single-tab-task/live-single-tab-task-index.3557cdc449de82326239.js","va":"https://cdn-tos-va.byteintl.net/obj/archi-us/ies/resource/falcon/tiktok_fusion_component/development/single-tab-task/live-single-tab-task-index.5f03015173787433f2f4.js"}}]}',
    is_revenue: false
  };

  const testCase = [
    {
      path:
        "config.op_component_config.features.0.task_config.task_items.0.anchor_conditions.0",
      feature_type: 2,
      fe_id: "case2",
      message: "单任务"
    },
    {
      path:
        "config.op_component_config.features.1.task_config.task_items.0.task_phases.0.task_conditions.0.condition_value",
      feature_type: 2,
      fe_id: "case2",
      message: "ttt"
    },
    {
      path:
        "config.op_component_config.features.0.ranklist_config.sub_ranklists.0.activity_value_calculators.0.factor",
      feature_type: 2,
      fe_id: "case2",
      message: "ttt"
    },
    {
      path:
        "config.op_component_config.features.0.ranklist_config.sub_ranklists.1.sub_ranklists.0.activity_value_calculators.0.factor",
      feature_type: 2,
      fe_id: "case2",
      message: "ttt"
    }
  ];

  test("base case", () => {
    expect(mapConfigToFormPath(mapRules, testCase, activityInfo)).toMatchObject(
      [
        {
          path: "basicInfo.conditions.0"
        },
        {
          path: "multipleConditionInfo.tasks.0.conditions.0.174-condition_value"
        },
        {
          path: "tabInfo.0.activity_value_calculators.0.factor"
        },
        {
          path: "tabInfo.1.subTabInfoList.0.activity_value_calculators.0.factor"
        }
      ]
    );
  });
});
