import style from './style/index.module.less';
import imgUrl from './img/3D.svg';
import Typed from 'typed.js';
import React, { useEffect, useState } from 'react';
import SocialContact from '../SocialContact';
import { NavLink } from 'react-router-dom';
import { getWebInfo } from '../../api/webInfo';
import { SOCIAL, WEBINFO } from './type';
const HomeContent = () => {
    const el = React.useRef(null);
    const [webInfo, setWebInfo] = useState<WEBINFO>();
    // 请求首页数据
    useEffect(() => {
        getWebInfo()
            .then(res => {
                console.log("✅ ~ zhuling res:", res.data)
                setWebInfo(res.data)
            })
            .catch(err => {
                console.trace("✅ ~ zhuling err:", err)
            })
    }, [])

    useEffect(() => {
        if (!webInfo) return;
        const { roles } = webInfo as WEBINFO;
        const typed = new Typed(el.current, {
            strings: roles,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, [webInfo]);
    if (!webInfo) return;
    const { author, motto, social, avatarImg } = webInfo as WEBINFO;
    return <>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.desc}>
                    <h3>你好👋！</h3>
                    <h1>我是 <i>{author}</i></h1>
                    <h3>我是一个 <span ref={el}></span></h3>
                    <p>{motto}</p>
                </div>
                <div className={style.link}>
                    <SocialContact
                        type='withBorder'
                        social={social as SOCIAL[]}
                    />
                </div>
                <div className={style.buttonContaner}>
                    <NavLink className={style.button} to={'/works'}>开始探索</NavLink>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.homeImg}>
                    <img src={avatarImg} alt="" />
                </div>
            </div>
        </div>
    </>
}

export default HomeContent;