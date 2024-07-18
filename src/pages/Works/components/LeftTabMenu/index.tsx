/* eslint-disable @typescript-eslint/ban-types */
import { WORKITEM, WORK_LIST } from "../../../../constants";
import { LEFT_MENU_TABS } from "./constants";
import style from "./style/index.module.less";
import classNames from "classnames";
interface LeftTabMenuProps {
  activeTab: string;
  workList: WORKITEM[];
  setActiveTab: Function;
  setFilterWorkList: Function;
}
export type MenuType = "animation" | "component" | "write";
const LeftTabMenu = (props: LeftTabMenuProps) => {
  const { activeTab, workList, setActiveTab, setFilterWorkList } = props;
  const getWorkList = (type: MenuType) => {
    // 激活菜单
    setActiveTab(type);
    const newWorkList = workList.filter((item) => {
      return item.type == type;
    });
    console.log("✅ ~ newWorkList:", newWorkList);
    // 设置作品list
    setFilterWorkList(WORK_LIST);
  };
  return (
    <div className={style.container}>
      {LEFT_MENU_TABS.map((item) => {
        return (
          <div
            className={classNames({
              [style.tabItem]: true,
              [style.activeTab]: item.type === activeTab,
            })}
            onClick={() => {
              getWorkList(item.type);
            }}
          >
            <div className={style.icon}>{item.icon}</div>
            <div className={style.name}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftTabMenu;
