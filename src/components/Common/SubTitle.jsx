import React from "react";

const SubTitle = ({ children, Style = "text-center" }) => {
  return (
    <p
      className={`font-primary font-normal text-lg sm:text-2xl text-white  pt-2 ${Style}`}
    >
      {children}
    </p>
  );
};

export default SubTitle;
