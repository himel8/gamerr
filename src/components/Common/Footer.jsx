import React from "react";

const links = [
  { name: "home", link: "#!" },
  { name: "about", link: "#!" },
  { name: "faq", link: "#!" },
  { name: "brands", link: "#!" },
  { name: "discord", link: "#!" },
];
const secondlinks = [
  { name: "Privacy Policy", link: "#!" },
  { name: "Terms of Services", link: "#!" },
  { name: "Code of Conduct", link: "#!" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 pt-20 sm:pt-10">
      <h2 className="font-header text-4xl sm:text-5xl tracking-tight text-header text-center">
        gamerr.gg
      </h2>

      <div className="flex justify-center items-center gap-[36px] sm:gap-[46px] flex-wrap">
        {links.map((data, index) => (
          <a
            key={index}
            href={data.link}
            className="font-primary font-medium text-[12px] tracking-[10%] uppercase text-white"
          >
            {data.name}
          </a>
        ))}
      </div>

      <div className="footerLine w-[95%] h-[3px] mx-auto"></div>

      <div className="w-[95%] mx-auto flex justify-center md:justify-between items-center md:flex-nowrap flex-wrap md:gap-0 gap-4">
        <p className="font-text text-sm text-white">
          All Rights Reserved @gamer.gg
        </p>
        <div className="flex justify-center items-center gap-[18px]">
          {secondlinks.map((data, index) => (
            <a
              key={index}
              href={data.link}
              className={`font-primary font-medium text-[12px] tracking-[10%] uppercase text-white ${
                index !== 2 ? "footerLinkBar" : ""
              }`}
            >
              {data.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
