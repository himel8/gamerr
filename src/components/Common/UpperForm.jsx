import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpperForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const signature =
    "3aa5b3d47814f06563169237c3a9a5fb1d428cdbb8cee13dac755d2746453541";

  const handleInput = (e) => {
    e.preventDefault();
    window.prefinery(
      "addUser",
      {
        email: email,
        first_name: name,
      },
      function (user) {
        console.log(user);
        if (user.id) {
          toast.success("user added sucessfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          window.prefinery("embedReferralPage", {
            email: email,
            signature: signature,
            dom_id: "embed-here",
          });
        } else {
          toast.error("got an error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    );

    setName("");
    setEmail("");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form className="w-full" onSubmit={handleInput}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full lg:w-[33%] px-2 xl:px-3 mb-6 lg:mb-0">
            <input
              className="appearance-none block w-full font-primary font-normal text-[16px] leading-[24px] text-[#fff] rounded-sm py-6 px-5 bg-[#4a4a4a] outline-primary"
              id="grid-first-email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="w-full lg:w-[33%] px-2 xl:px-3 mb-6 lg:mb-0">
            <input
              className="appearance-none block w-full font-primary font-normal text-[16px] leading-[24px] text-[#fff] rounded-sm py-6 px-5 bg-[#4a4a4a] outline-primary"
              id="grid-first-text"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="gamerr.gg/yourname"
            />
          </div>
          <div className="w-full lg:w-[33%]  px-2 xl:px-3">
            <input
              className="w-full font-primary  text-base xl:text-lg block py-5 px-2 text-center border-2 border-primary rounded-md cursor-pointer text-[#fff] bg-primary"
              value=" Reserve your Spot"
              type="submit"
            />
          </div>
        </div>
      </form>

      <div id="embed-here"></div>
    </div>
  );
};

export default UpperForm;
