import React from "react";

const Form = () => {
  return (
    <div>
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full lg:w-[33%] px-2 xl:px-3 mb-6 lg:mb-0">
            <input
              className="appearance-none block w-full font-primary font-normal text-[16px] leading-[24px] text-[#fff] rounded-sm py-6 px-5 bg-[#4a4a4a] outline-primary"
              id="grid-first-email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="w-full lg:w-[33%] px-2 xl:px-3 mb-6 lg:mb-0">
            <input
              className="appearance-none block w-full font-primary font-normal text-[16px] leading-[24px] text-[#fff] rounded-sm py-6 px-5 bg-[#4a4a4a] outline-primary"
              id="grid-first-text"
              type="text"
              placeholder="gamerr.gg/yourname"
            />
          </div>
          <div className="w-full lg:w-[33%]  px-2 xl:px-3">
            <a
              href="#!"
              className="font-primary  text-base xl:text-lg block py-5 text-center border-2 border-primary rounded-md cursor-pointer text-[#fff] bg-primary"
            >
              Reserve your Spot
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
