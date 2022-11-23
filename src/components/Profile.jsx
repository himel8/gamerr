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

      <Slider />

      <p className="font-primary font-medium text-lg sm:text-[23px]  text-white text-center pt-2 tracking-wider mb-8">
        Find paid gigs for your gaming skills{" "}
      </p>

      <Button Style={"bg-primary text-white"} link={"#grid-first-email"}>
        Reserve your Spot
      </Button>
    </section>
  );
};

export default Profile;
