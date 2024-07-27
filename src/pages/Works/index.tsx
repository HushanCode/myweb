import { useEffect, useState } from "react";
import ContentTitle from "./components/ContentTitle";
import LeftAvatar from "./components/LeftAvatar";
import LeftTabMenu, { MenuType } from "./components/LeftTabMenu";
import TopButton from "./components/TopButton";
import style from "./style/index.module.less";
import WorkCard from "./components/WorkCard";
import { WEBINFO, WEBINFODETAIL, WORKITEM, WORK_LIST } from "../../constants";
import { SubType } from "./components/ContentTitle/constants";
const Works = () => {
  const [activeTab, setActiveTab] = useState<MenuType>("animation");
  const [subActiveTab, setSubActiveTab] = useState<SubType>("all");
  const [workList] = useState<WORKITEM[]>(WORK_LIST);
  const [filterWorkList, setFilterWorkList] = useState<WORKITEM[]>([]);
  const [webInfo] = useState<WEBINFO>(WEBINFODETAIL);

  useEffect(() => {
    setFilterWorkList(
      subActiveTab === "all"
        ? WORK_LIST.filter((item) => item.type === activeTab)
        : WORK_LIST.filter(
            (item) => item.type === activeTab && item.subType === subActiveTab
          )
    );
  }, [subActiveTab, activeTab]);

  if (!filterWorkList || !webInfo) return null;
  console.log("✅ ~ filterWorkList:", filterWorkList);

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          {/* 左侧返回&折叠 */}
          <TopButton></TopButton>
          {/* 左侧头像作者名 */}
          <LeftAvatar
            avatarName={webInfo.author as string}
            avatarImg={webInfo.avatarImg as string}
          ></LeftAvatar>
          {/* 左侧菜单 */}
          <LeftTabMenu
            activeTab={activeTab}
            workList={workList}
            setActiveTab={setActiveTab}
            setFilterWorkList={setFilterWorkList}
          ></LeftTabMenu>
        </div>
        <div className={style.right}>
          <div className={style.contentTitleContainer}>
            <ContentTitle
              type={activeTab}
              subActiveTab={subActiveTab}
              setSubActiveTab={setSubActiveTab}
              workList={workList}
              setFilterWorkList={setFilterWorkList}
            ></ContentTitle>
          </div>
          <div className={style.outWorkContainer}>
            <div className={style.workContainer}>
              {filterWorkList?.map((item) => {
                return (
                  <>
                    <WorkCard
                      link={item.link}
                      desc={item.desc}
                      miniImg={item.avatarImg}
                      coverImg={item.coverImg}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
