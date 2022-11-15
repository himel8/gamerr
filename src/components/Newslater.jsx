import React from "react";
import Img from "../assets/news.png";
import Form from "./Common/Form";
import SubTitle from "./Common/SubTitle";
import Title from "./Common/Title";

const Newslater = () => {
  return (
    <section className="flex justify-center items-center gap-12 md:flex-nowrap flex-wrap mx-4 py-10">
      <div className="w-full md:w-[35%]">
        <img src={Img} alt="newslater-img" className="w-full" />
      </div>
      <div className="flex flex-col gap-1 justify-start w-full md:w-[65%]">
        <Title Style="text-center md:text-left" LineStyle={"w-[99%] h-[3px]"}>
          Become a Gamerr today!
        </Title>
        <SubTitle Style="text-center md:text-left pb-10">
          Reserve your spot today to claim the username of your dreams. We’re
          also giving away freebies, games & points to early-joiners!
        </SubTitle>
        <Form />
      </div>
    </section>
  );
};

export default Newslater;
