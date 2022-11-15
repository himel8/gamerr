import React from "react";
import Img from "../assets/gamer.png";
import SubTitle from "./Common/SubTitle";
import Title from "./Common/Title";
import GamerCard from "./GamerCard";

const gamerdata = [
  {
    img: Img,
    desc: "Gamer.gg is actually a place for us to earn, gather, promote and create. like a social home base. Thanks for opening up and thanks for that “Gamers Respect Gamer” IP protection shield!",
    name: "DOUBLE_O_SEVEN",
    title: "PUBG L500",
  },
  {
    img: Img,
    desc: "Gamer.gg is actually a place for us to earn, gather, promote and create. like a social home base. Thanks for opening up and thanks for that “Gamers Respect Gamer” IP protection shield!",
    name: "DOUBLE_O_SEVEN",
    title: "PUBG L500",
  },
  {
    img: Img,
    desc: "Gamer.gg is actually a place for us to earn, gather, promote and create. like a social home base. Thanks for opening up and thanks for that “Gamers Respect Gamer” IP protection shield!",
    name: "DOUBLE_O_SEVEN",
    title: "PUBG L500",
  },
];

const Gamers = () => {
  return (
    <section className="mx-4">
      <Title>100,000+ Gamerr Profiles</Title>
      <SubTitle>Selling services to 100+ brands and advertisers</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {gamerdata.map((data, index) => (
          <GamerCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Gamers;
