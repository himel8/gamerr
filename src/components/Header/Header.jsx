import React from "react";
import Button from "../Common/Button";

const Header = () => {
  return (
    <header className="mx-4">
      <div className="flex justify-between items-center gap-8">
        <h2 className="font-header text-3xl  sm:text-5xl tracking-tight text-header">
          gamerr.gg
        </h2>

        <Button Style={"customBg text-primary text-center"}>
          Reserve your Spot
        </Button>
      </div>
    </header>
  );
};

export default Header;
