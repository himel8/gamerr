import React from "react";

const AdvantageCard = ({ data }) => {
  const { img, title, subTitle, desc } = data;
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full sm:w-[75%] md:w-[50%]">
      <div className="w-[134px] h-[134px] flex items-center">
        <img src={img} alt={title} className="w-full" />
      </div>
      <div className="text-center space-y-2 bg-borderBg bg-full bg-no-repeat rounded-[34px] min-h-[16.5rem] sm:min-h-[19.5rem] p-4">
        <h4 className="text-[#F06626] font-primary font-medium text-2xl sm:text-[27px] ">
          {title}
        </h4>

        <h6 className="font-primary font-medium text-sm sm:text-[16px] tracking-[-4%] text-[#DAD7D7] pb-2">
          {subTitle}
        </h6>

        <p className="font-primary font-medium text-base sm:text-[18px] tracking-[-4%] text-[#DAD7D7] pb-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AdvantageCard;
