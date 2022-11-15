import React from "react";

const Title = ({
  children,
  Style = "text-center",
  LineStyle = "w-[60%] mx-auto h-[5px]",
}) => {
  return (
    <>
      <h2
        className={`font-primary font-medium text-primary text-3xl sm:text-5xl  mb-3 ${Style}`}
      >
        {children}
      </h2>
      <div className={`footerLine ${LineStyle} rounded-sm mb-3`}></div>
    </>
  );
};

export default Title;
