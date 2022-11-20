import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, children, Style }) => {
  return (
    <Link
      to={link}
      className={`font-primary text-base sm:text-lg  py-2 sm:py-4 px-5 sm:px-9 border-2 border-primary rounded-md cursor-pointer ${Style}`}
    >
      {children}
    </Link>
  );
};

export default Button;
