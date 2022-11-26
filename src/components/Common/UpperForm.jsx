import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpperForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const userName = `gamerr.gg/` + name;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleInput = async (e) => {
    setName("");
    setEmail("");
    e.preventDefault();

    await fetch("https://api.gamerr.gg/api/v1/gamer/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          window.prefinery(
            "addUser",
            {
              email: email,
              first_name: userName,
            },
            function (user) {
              if (user.id) {
                toast.success("user added sucessfully", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                // navigate(`/referral/${email}`, "_blank");
                window.open(`/referral/${email}`, "_blank");
              } else {
                toast.error("Enter a valid username and Email", {
                  position: "top-right",
                  autoClose: 1000,
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
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
          <div className="w-full lg:w-[33%] px-2 xl:px-3 mb-6 lg:mb-0 relative">
            <input
              className="pl-[115px] appearance-none block w-full font-primary font-normal text-[16px] leading-[24px] text-[#fff] rounded-sm py-6 px-5 bg-[#4a4a4a] outline-primary"
              id="grid-first-text"
              onChange={handleName}
              type="text"
              placeholder="username"
            />
            <p className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-[79px] font-primary font-normal text-[16px] leading-[24px] text-[#fff] opacity-70">
              gamerr.gg/
            </p>
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
    </div>
  );
};

export default UpperForm;
