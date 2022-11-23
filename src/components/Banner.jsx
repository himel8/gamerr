import React from "react";
import BannerImg from "../assets/banner.png";
import UpperForm from "./Common/UpperForm";

export const Banner = () => {
  return (
    <section className="flex justify-center items-center gap-8 mx-4 lg:flex-nowrap flex-wrap-reverse py-10">
      <div className="w-full lg:w-[60%] flex flex-col gap-6 text-center">
        <h2 className="font-primary font-semibold text-4xl sm:text-5xl sm:leading-[60px] text-primary capitalize">
          Don’t Just Play Games
          <br />
          Make Money for Being a Gamerr
        </h2>
        <p className="font-primary font-normal text-xl sm:text-2xl tracking-tight mb-8 text-white ">
          Build your free Gamerr profile to find paid gigs for your gaming
          skills.
        </p>
        <UpperForm />
      </div>
      <div className="w-full lg:w-[40%] relative">
        <img src={BannerImg} alt="banner-img" className="z-10" />

        {/* <div className="absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
          <img src={BannertransImg} alt="banner-img" className=" -z-10" />
        </div> */}
      </div>
    </section>
  );
};
