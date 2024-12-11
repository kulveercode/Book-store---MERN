import Banner from "./Banner";
import News from "./NEws";
import Recommended from "./Recommended";
import TopSelling from "./TopSelling";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSelling />
      <Recommended />
      <News />
    </>
  );
};

export default Home;
