import React from "react";

const GamerCard = ({ data }) => {
  const { desc, name, title } = data;
  return (
    <div className="bg-gamerBg bg-full bg-no-repeat flex flex-col justify-center items-center gap-6 py-4 px-2">
      {/* <div>
        <img src={img} alt={name} />
      </div> */}
      <p className="font-primary font-normal text-[16px] text-white text-center tracking-[-4%]">
        {desc}
      </p>
      <h4 className="font-text font-semibold text-lg tracking-[-4%] text-center text-primary">
        {name}
      </h4>
      <h6 className="font-text font-normal text-lg tracking-[-4%] text-center text-white">
        {title}
      </h6>
    </div>
  );
};

export default GamerCard;
