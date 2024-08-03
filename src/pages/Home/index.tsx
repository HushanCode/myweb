import { useEffect } from "react";
import Header from "../../components/Header";
import HomeContent from "../../components/HomeContent";
import style from "./style/index.module.less";
import { renderMatter } from "./matterRender";
import Footer from "../../components/Footer";
const Home = () => {
  useEffect(() => {
    renderMatter();
  }, []);
  return (
    <>
      <div className={style.container}>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    </>
  );
};

export default Home;
