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

        <Button Style={"customBg text-primary text-center"}>
          Reserve your Spot
        </Button>
      </div>
    </header>
  );
};

export default Header;
