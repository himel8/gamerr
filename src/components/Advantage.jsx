import React from "react";
import batman from "../assets/batman.png";
import Img2 from "../assets/gammerGG.png";
import ironman from "../assets/ironMan.png";
import Img1 from "../assets/ordinary.png";
import AdvantageCard from "./AdvantageCard";
import Button from "./Common/Button";
import SubTitle from "./Common/SubTitle";
import Title from "./Common/Title";

const data = [
  {
    img: Img1,
    title: "Ordinary Gamers",
    subTitle: "Harassment is a problem",
    desc: "No proper place to connect with teams and brandsNo good fair financial platform for your stuffToxic teammates ruin your gameFailing to improve your skills It’s hard to find a partner that matches youIt’s impossible to reach pro gamers",
  },
  {
    img: Img2,
    title: "Gamerr.gg",
    subTitle: "Connect directly with pro gamers & teams",
    desc: "All in oneYour unified gamer profileRecord & share wins and fails momentsEarn by being active - and get your cut of ads revenueThe social network just for gamersLearn from pros",
  },
];

const Advantage = () => {
  return (
    <section className="flex justify-center flex-col items-center py-8 mx-4 relative">
      <Title>Unlock the Gamerr Advantage</Title>

      <SubTitle>
        By selling products and services to brands, advertisers and other gamers
      </SubTitle>

      <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap w-full lg:w-[70%] mx-auto mt-8">
        {data.map((data, index) => (
          <AdvantageCard key={index} data={data} />
        ))}
      </div>

      <p className="font-primary font-medium text-[23px]  text-white text-center tracking-wider py-8">
        Start earning from your gaming skills{" "}
      </p>

      <Button Style={"bg-primary text-white"}>Reserve your Spot</Button>

      {/* absolute images */}

      <div className="xl:block hidden absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%]">
        <img src={batman} alt="" />
      </div>
      <div className="xl:block hidden absolute top-[40%] left-[95%] translate-x-[-50%] translate-y-[-50%] w-[20%]">
        <img src={ironman} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Advantage;
