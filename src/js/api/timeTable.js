layui.define(['jquery', 'utils', 'fetch', 'tools'], function (exports) {
      const $ = layui.jquery;
      const utils = layui.utils;
      const _ = layui.lodash;
      const fetch = layui.fetch;
      const storage = utils.localStorage;
      const tools = layui.tools;

      const timeTable = {
        // 班级选择器专用接口
        selector: (data) => {
          return tools.baseApi(
              fetch({
                method: 'post',
                url: "/biz/api/class/v1/selector",
                data: {data},
              })
          );
        },

        // 班级科目
        subjectSelectorByClass: (data) => {
          return tools.baseApi(
              fetch({
                method: 'post',
                url: "/biz/api/class/v1/subjectSelectorByClass",
                params: {
                  classId: data
                },
              })
          );
        },

        // 教师选择器
        classRoom: (data) => {
          return tools.baseApi(
              fetch({
                method: 'post',
                url: "/biz/api/classroom/v1/selector",
                data: {data},
              })
          );
        },

        // 生成排课记录
          createByPlan: (data) => {
          return tools.baseApi(
              fetch({
                method: 'post',
                url: "/biz/api/coursePlan/v1/createByPlan",
                data: data,
              })
          );
        },


      };

      //输出menu接口
      exports('timeTable', timeTable);
    }
)
