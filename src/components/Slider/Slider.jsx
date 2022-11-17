import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/slider/Profile1.jpg";
import slide2 from "../../assets/slider/Profile2.jpg";
import slide3 from "../../assets/slider/Profile3.jpg";
import slide4 from "../../assets/slider/Profile4.jpg";

const sliderDate = [slide1, slide2, slide3, slide4];

const Slider = () => {
  return (
    <div className="bg-iconBg bg-no-repeat bg-full md:w-[110%] sm:w-[140%] w-[180%] my-6 ">
      {/* // <div className="flex justify-center items-center w-[44%] sm:w-[43%] mx-auto py-10 "> */}
      <div className="w-[50%] md:w-[60%] lg:w-[43%] mx-auto py-10">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="custom-style-slider rounded-xl"
        >
          {sliderDate.map((data, index) => (
            <SwiperSlide
              className="flex justify-center items-start rounded-xl"
              key={index}
            >
              <img
                src={data}
                alt=""
                className="w-full object-cover rounded-xl "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
