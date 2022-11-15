import React from "react";

const DetailCard = ({ data }) => {
  const { img, title, desc, id, boxImg } = data;
  return (
    <div
      className={`md:mx-0 py-6 flex justify-center items-center lg:flex-nowrap flex-wrap  md:gap-0 gap-4 ${
        id % 2 === 1 ? "" : " flex-row-reverse"
      }`}
    >
      <div
        className={`w-[80%] md:w-[50%] flex justify-center  ${
          id % 2 === 1 ? "lg:mr-16" : "lg:ml-16"
        }`}
      >
        <img src={img} alt="" />
      </div>
      {/* 2nd part */}
      <div
        className={`flex justify-center items-center gap-6 md:gap-0 md:flex-nowrap flex-wrap ${
          id % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`bg-detailBox bg-full bg-no-repeat p-5 pr-12  ${
            id % 2 === 1 ? "-mr-1 " : " md:pl-[56px] -ml-1"
          }`}
        >
          <h5 className="font-primary font-normal text-2xl sm:text-[27px] text-[#F06626] mb-2">
            {title}
          </h5>
          <p className="font-primary font-normal text-base sm:text-[20px] text-white tracking-tighter">
            {desc}
          </p>
        </div>
        <div className="md:w-[80%]">
          <img src={boxImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
