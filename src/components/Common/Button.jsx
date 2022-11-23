import React from "react";

const Button = ({ link, children, Style }) => {
  return (
    <a
      href={link}
      className={`font-primary text-base sm:text-lg  py-2 sm:py-4 px-5 sm:px-9 border-2 border-primary rounded-md cursor-pointer  ${Style}`}
    >
      {children}
    </a>
  );
};

export default Button;
