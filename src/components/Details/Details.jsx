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
    title: "List your Services",
    desc: "Choose from hundreds of suggested services, list your own custom service or discover tasks created by brands that fit your expertise.",
  },
  {
    id: 3,
    img: Img3,
    boxImg: boxImg2,
    title: "Get paid to be a Gamerr",
    desc: "Receive 20% payment upfront and the remaining on completing the service. You can also choose to get paid in points that can be redeemed in the gamerr shop.",
  },
];

const Details = () => {
  return (
    <section className="flex flex-col justify-center items-center pb-20 pt-20 md:pt-10 mx-4">
      <Title>One Profile to Rule them All</Title>

      <p className="font-primary font-medium text-lg sm:text-[23px]  text-white text-center pt-2 tracking-wider mb-8 md:mb-0">
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
