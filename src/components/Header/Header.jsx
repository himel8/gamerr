import React from "react";
import logo from "../../assets/logo.png";
import Button from "../Common/Button";

const Header = () => {
  return (
    <header className="mx-4">
      <div className="flex justify-between items-center gap-8">
        <div className="w-[35%] md:w-[25%]">
          <img src={logo} alt="logo" className="w-full" />
        </div>

        <Button
          Style={
            "customBg text-center text-white border-white hover:scale-105 transition-all transform ease-in-out duration-500"
          }
          link={"#grid-first-email"}
        >
          Reserve your Spot
        </Button>
      </div>
    </header>
  );
};

export default Header;
