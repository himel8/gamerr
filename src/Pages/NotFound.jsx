import React from "react";
import Button from "../components/Common/Button";

const NotFound = () => {
  return (
    <div className="bg-[#000000]">
      <div className="min-h-screen flex flex-col  py-20 gap-12 w-[95%] md:w-[80%] mx-auto">
        <p className="text-center font-primary text-6xl text-white font-bold capitalize underline justify-center pb-10">
          Page Not found
        </p>

        <div className="text-center ">
          <Button
            link="/"
            Style={
              "text-white hover:text-primary hover:bg-white text-center transform transition-all duration-700 ease-in-out font-medium"
            }
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
