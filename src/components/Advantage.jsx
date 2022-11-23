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
    desc: [
      "Several, disjointed gamer identities.",
      "No way to showcase gaming skills.",
      "Can’t monetize gaming expertise.",
      "Tough to connect with clients or employers who need gaming skills",
    ],
  },
  {
    img: Img2,
    title: "Gamerr.gg",
    subTitle: "Connect directly with pro gamers & teams",
    desc: [
      "Unified gamerr profile.",
      "Verified skills showcase.",
      "Multiple monetization methods.",
      "Easily sell products or services & be discovered by potential employers.",
    ],
  },
];

const Advantage = () => {
  return (
    <section className="flex justify-center flex-col items-center py-8 mx-4 relative">
      <Title>Unlock Your Gamerr Advantage</Title>

      <SubTitle>
        By listing your skills, services and products for brands, advertisers
        and other gamers to discover
      </SubTitle>

      <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap w-full lg:w-[70%] mx-auto mt-8">
        {data.map((data, index) => (
          <AdvantageCard key={index} data={data} />
        ))}
      </div>

      <p className="font-primary font-medium text-[23px]  text-white text-center tracking-wider py-8">
        Find paid gigs for your gaming skills{" "}
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
