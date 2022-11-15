import React from "react";
import Img2 from "../../assets/army.png";
import Img3 from "../../assets/army2.png";
import boxImg1 from "../../assets/detailsline.png";
import boxImg2 from "../../assets/pubg1.png";
import Img1 from "../../assets/queen.png";
import Button from "../Common/Button";
import Title from "../Common/Title";
import DetailCard from "./DetailCard";

const detailsData = [
  {
    id: 1,
    img: Img1,
    boxImg: boxImg1,
    title: "Connect your Accounts",
    desc: "Sync over 10000+ game titles, social accounts and gaming IDs to your gamerr profile to flaunt your stats, achievements, and expertise to the world.",
  },
  {
    id: 2,
    img: Img2,
    boxImg: boxImg2,
    title: "Connect your Accounts",
    desc: "Sync over 10000+ game titles, social accounts and gaming IDs to your gamerr profile to flaunt your stats, achievements, and expertise to the world.",
  },
  {
    id: 3,
    img: Img3,
    boxImg: boxImg2,
    title: "Connect your Accounts",
    desc: "Sync over 10000+ game titles, social accounts and gaming IDs to your gamerr profile to flaunt your stats, achievements, and expertise to the world.",
  },
];

const Details = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20 mx-4">
      <Title>One Profile to Rule them All</Title>

      <p className="font-primary font-medium text-lg sm:text-[23px]  text-white text-center pt-2 tracking-wider mb-8">
        Customize your very own gamerr profile in every way possible
      </p>

      <div>
        {detailsData.map((data, index) => (
          <DetailCard key={index} data={data} />
        ))}
      </div>

      <p className="font-primary font-medium text-[23px]  text-white text-center pt-2 tracking-wider mb-8">
        Start earning from your gaming skills
      </p>

      <Button Style={"bg-primary text-white"}>Reserve your Spot</Button>
    </section>
  );
};

export default Details;
