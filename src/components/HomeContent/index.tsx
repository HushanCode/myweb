import style from "./style/index.module.less";
import Typed from "typed.js";
import React, { useEffect } from "react";
import SocialContact from "../SocialContact";
import { NavLink } from "react-router-dom";
import { SOCIAL, WEBINFODETAIL } from "../../constants";
const HomeContent = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: WEBINFODETAIL.roles,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.desc}>
            <h3>你好👋！</h3>
            <h1>
              我是 <i>{WEBINFODETAIL.author}</i>
            </h1>
            <h3>
              我是一个 <span ref={el}></span>
            </h3>
            <p>{WEBINFODETAIL.motto}</p>
          </div>
          <div className={style.link}>
            <SocialContact
              type="withBorder"
              social={WEBINFODETAIL.social as SOCIAL[]}
            />
          </div>
          <div className={style.buttonContaner}>
            <NavLink className={style.button} to={"/works"}>
              开始探索
            </NavLink>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.homeImg} id="canvasMatter">
            {/* <img src={logo} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
