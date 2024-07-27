import style from "./style/index.module.less";
import avatar from "../../assets/icon.png";
import bg from "../../components/HomeContent/img/bg.avif";
import { useState } from "react";
import { ABOUT, ABOUTINFO } from "../../constants";
import { Tag } from "./components/Tag";
const About = () => {
  const [aboutInfo] = useState<ABOUT>(ABOUTINFO);
  if (!aboutInfo) return null;
  const { author, introduce, skills, experience, lifeImgList } = aboutInfo;
  console.log("✅ ~ lifeImgList:", lifeImgList);
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
          <h3>技能&经验</h3>
          <div className={style.skillList}>
            {skills.map((item) => {
              return (
                <div className={style.tagItem}>
                  <Tag size="large" tagTitle={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.experience}>
          <h3>职业经历</h3>
          <div className={style.experienceList}>
            {experience.map((item) => {
              return (
                <div className={style.experienceItems}>
                  <div className={style.titleItem}>
                    <div className={style.title}>{item.title} </div>
                    <div className={style.time}>{item.time}</div>
                  </div>
                  <div className={style.projectsList}>
                    {item.projects.map((item) => {
                      return (
                        <div className={style.projectItem}>
                          <div className={style.projectTime}>
                            <div className={style.title}> {item.title}</div>
                            <div className={style.time}> ：{item.time}</div>
                          </div>

                          <div className={style.projectItemSkills}>
                            {item.skills.map((item) => {
                              return (
                                <div className={style.tagItem}>
                                  <Tag size="mini" tagTitle={item} />
                                </div>
                              );
                            })}
                          </div>
                          <ul>
                            {item.function.map((item) => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.todo}>
          <h3>成为什么样的人</h3>
          <div className={style.future}>
            热爱生活和分享技术的前端工程师。我希望能够通过我的博客，与大家分享我的生活态度、经历和技术的学习，希望带给大家一些启发和帮助！你也可以在我的
            掘金 和 Github 里面了解更多。
          </div>
        </div>
        <div className={style.life}>
          <h3>日常生活</h3>
          <div className={style.imgContainer}>
            {lifeImgList.map((item) => {
              return (
                <>
                  <img src={item.url} alt="" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
