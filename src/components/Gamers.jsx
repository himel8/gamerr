import React from "react";
import Img from "../assets/gamer.png";
import SubTitle from "./Common/SubTitle";
import Title from "./Common/Title";
import GamerCard from "./GamerCard";

const gamerdata = [
  {
    img: Img,
    desc: "“I didn’t even know my gaming skills were something brands would pay for until I made my gamerr profile!”",
    name: "Jai Patil (Fortnite)",
    title: "Freelance Community Manager",
  },
  {
    img: Img,
    desc: "“The gaming internships I found through my Gamerr profile were 100x better than the usual ones I found through LinkedIn!”",
    name: "Saloni Pawar (Valorant)",
    title: "Communications Intern at a AAA Game Developer",
  },
  {
    img: Img,
    desc: "“I get paid to test out new games every month and to recommend them to my friends once they launch. It’s good money for something I would have done for free!”",
    name: "Ishan Kanungo (Freefire)",
    title: "Early Game Tester & Advocate",
  },
];

const Gamers = () => {
  return (
    <section className="mx-4">
      <Title>100,000+ Gamerr Profiles</Title>
      <SubTitle>50,000+ gigs, jobs and paid opportunities</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {gamerdata.map((data, index) => (
          <GamerCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Gamers;
