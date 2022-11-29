import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Common/Button";

const MyReferral = () => {
  const { userId } = useParams();
  console.log(userId);
  const signature =
    "3aa5b3d47814f06563169237c3a9a5fb1d428cdbb8cee13dac755d2746453541";

  useEffect(() => {
    window.prefinery("embedReferralPage", {
      email: userId,
      signature: signature,
      dom_id: "embed-here",
    });
  }, [userId]);

  return (
    <div className="bg-[#000000]">
      <div className="min-h-screen flex flex-col  py-20 gap-12 w-[95%] md:w-[80%] mx-auto">
        
        <div id="embed-here"></div>
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

export default MyReferral;
