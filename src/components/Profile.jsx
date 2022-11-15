import React from "react";
import profileImg from "../assets/profile.png";
import Button from "./Common/Button";
import SubTitle from "./Common/SubTitle";
import Title from "./Common/Title";

const Profile = () => {
  return (
    <section className="flex justify-center flex-col items-center py-8 mx-4">
      <Title>Your super powered Gamer Profile</Title>

      <SubTitle>
        Connect all your gaming accounts, services and socials under one single
        identity
      </SubTitle>

      <div className="flex justify-center items-center w-[80%] sm:w-[60%] mx-auto py-10">
        <img src={profileImg} alt="profile-img" className="w-full" />
      </div>

      <p className="font-primary font-medium text-lg sm:text-[23px]  text-white text-center pt-2 tracking-wider mb-8">
        Start earning from your gaming skills{" "}
      </p>

      <Button Style={"bg-primary text-white"}>Reserve your Spot</Button>
    </section>
  );
};

export default Profile;
