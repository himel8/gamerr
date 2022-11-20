import React from "react";
import Advantage from "../components/Advantage";
import { Banner } from "../components/Banner";
import Footer from "../components/Common/Footer";
import Details from "../components/Details/Details";
import Gamers from "../components/Gamers";
import Header from "../components/Header/Header";
import Newslater from "../components/Newslater";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="bg-mainBg bg-no-repeat bg-full overflow-x-hidden">
      <div className="App w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto py-4 md:py-10">
        <Header />
        <Banner />
        <Profile />
        <Advantage />
        <Details />
        <Gamers />
        <Newslater />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
