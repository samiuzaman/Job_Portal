import { Helmet } from "react-helmet-async";

import { Outlet } from "react-router-dom";
import Banner from "../components/HomeLayout/Banner";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Sports Equipify</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="">
        <Banner></Banner>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
