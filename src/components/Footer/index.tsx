import style from "./style/index.module.less";
const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.info}>
          Copyright©{new Date().getFullYear()}-ObjectX{" "}
          <a href="https://beian.miit.gov.cn" target="_blank">
            京ICP备2023017462号
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
