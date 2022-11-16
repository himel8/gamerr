import React from "react";
import Button from "./Common/Button";
import SubTitle from "./Common/SubTitle";
import Title from "./Common/Title";
import Slider from "./Slider/Slider";

const Profile = () => {
  return (
    <section className="flex justify-center flex-col items-center py-8 mx-4">
      <Title>Your super powered Gamer Profile</Title>

      <SubTitle>
        Connect all your gaming accounts, services and socials under one single
        identity
      </SubTitle>

      <div className="bg-iconBg bg-no-repeat bg-full sm:w-[110%] w-[180%] my-6 ">
        <div className="flex justify-center items-center w-[44%] sm:w-[43%] mx-auto py-10 ">
          <Slider />
        </div>
      </div>

      <p className="font-primary font-medium text-lg sm:text-[23px]  text-white text-center pt-2 tracking-wider mb-8">
        Start earning from your gaming skills{" "}
      </p>

      <Button Style={"bg-primary text-white"}>Reserve your Spot</Button>
    </section>
  );
};

export default Profile;
