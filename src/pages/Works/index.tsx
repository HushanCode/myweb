import { useState } from "react";
import ContentTitle from "./components/ContentTitle";
import LeftAvatar from "./components/LeftAvatar";
import LeftTabMenu, { MenuType } from "./components/LeftTabMenu";
import TopButton from "./components/TopButton";
import style from "./style/index.module.less";
import WorkCard from "./components/WorkCard";
import { WEBINFO, WEBINFODETAIL, WORKITEM, WORK_LIST } from "../../constants";
const Works = () => {
  const [activeTab, setActiveTab] = useState<MenuType>("animation");
  const [workList, setWorkList] = useState<WORKITEM[]>(WORK_LIST);
  const [filterWorkList, setFilterWorkList] = useState<WORKITEM[]>([]);
  const [webInfo, setWebInfo] = useState<WEBINFO>(WEBINFODETAIL);

  if (!filterWorkList || !webInfo) return null;
  console.log("✅ ~ workList:", workList);

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
          <ContentTitle
            type={activeTab}
            workList={workList}
            setFilterWorkList={setFilterWorkList}
          ></ContentTitle>
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
    </>
  );
};

export default Works;
