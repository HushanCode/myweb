import { useEffect } from "react";
import Header from "../../components/Header";
import HomeContent from "../../components/HomeContent";
import style from "./style/index.module.less";
import { renderMatter } from "./matterRender";
const Home = () => {
  useEffect(() => {
    renderMatter();
  }, []);
  return (
    <>
      <div className={style.container}>
        <Header></Header>
        <HomeContent></HomeContent>
      </div>
    </>
  );
};

export default Home;
