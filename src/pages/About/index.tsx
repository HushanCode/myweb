import style from "./style/index.module.less";
import avatar from "../../components/HomeContent/img/3D.png";
import bg from "../../components/HomeContent/img/bg.avif";
import { useState } from "react";
import { ABOUT, ABOUTINFO } from "../../constants";
const About = () => {
  const [aboutInfo, setAboutInfo] = useState<ABOUT>(ABOUTINFO);
  if (!aboutInfo) return null;
  const { author, introduce } = aboutInfo;
  return (
    <>
      <div className={style.container}>
        <div className={style.topImg}>
          <div className={style.topBg}>
            <img src={bg} alt="" />
          </div>
          <div className={style.topAvatar}>
            <img src={avatar} width={124} height={124} alt="" />
          </div>
        </div>
        <div className={style.title}>
          <h2>关于我</h2>
        </div>
        <div className={style.desc}>
          <p>你好 👋</p>
          <p>
            我是 <span className={style.name}>{author}</span> ，{introduce}
          </p>
        </div>
        <div className={style.skill}>
          <h3>技能</h3>
        </div>
        <div className={style.Experience}>
          <h3>职业经历</h3>
        </div>
        <div className={style.todo}>
          <h3>成为什么样的人</h3>
        </div>
        <div className={style.life}>
          <h3>日常生活</h3>
        </div>
      </div>
    </>
  );
};

export default About;
