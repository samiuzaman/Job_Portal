import { Helmet } from "react-helmet-async";

import { Outlet } from "react-router-dom";
import Banner from "../components/HomeLayout/Banner";
import HotJobs from "../components/HomeLayout/HotJobs";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Sports Equipify</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="">
        <Banner></Banner>
        <HotJobs></HotJobs>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
