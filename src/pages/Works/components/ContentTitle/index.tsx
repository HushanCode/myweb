/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useState } from "react";
import { LEFT_MENU_TABS } from "../LeftTabMenu/constants";
import { API_CLASSIFY, CLASSIFY } from "./constants";
import style from "./style/index.module.less";
import classNames from "classnames";
import { MenuType } from "../LeftTabMenu";
import { WORKITEM } from "../../../../constants";
interface ContentTitlePropType {
  // 类型
  type: MenuType;
  subActiveTab: string;
  workList: WORKITEM[];
  setSubActiveTab: Function;
  setFilterWorkList: Function;
}
const ContentTitle = (props: ContentTitlePropType) => {
  const { type, subActiveTab, workList, setFilterWorkList, setSubActiveTab } =
    props;
  const CLASSIFYS = type === "write" ? API_CLASSIFY : CLASSIFY;
  // 左侧菜单选择
  const tab = LEFT_MENU_TABS.find((tab) => tab.type === type);

  useEffect(() => {
    setSubActiveTab(CLASSIFYS[0].type);
  }, [CLASSIFYS, type, setSubActiveTab]);

  const getWorkList = (subActiveTab: string) => {
    console.log("✅ ~ subType:", subActiveTab);
    if (subActiveTab === "all") {
      const newWorksList = workList.filter((item) => {
        return item.type === type;
      });
      setSubActiveTab("all");
      setFilterWorkList(newWorksList);
      return;
    }
    const newWorksList = workList.filter((item) => {
      return item.subType === subActiveTab && item.type === type;
    });
    console.log("✅ ~ newWorksList:", newWorksList);
    setSubActiveTab(subActiveTab);
    setFilterWorkList(newWorksList);
  };

  return (
    <div className={style.titleContainer}>
      <div className={style.title}>全部{tab ? tab.title : null}</div>
      <div className={style.classify}>
        {CLASSIFYS?.map((item) => {
          return (
            <div
              className={classNames({
                [style.tabItem]: true,
                [style.isActive]: subActiveTab === item.type,
              })}
              onClick={() => {
                getWorkList(item.type);
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTitle;
