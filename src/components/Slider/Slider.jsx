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
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        620: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      className="h-[122vh] mx-4"
    >
      {sliderDate.map((data, index) => (
        <SwiperSlide
          className="h-screen flex justify-center items-start rounded-xl overflow-hidden"
          key={index}
        >
          <img src={data} alt="" className="w-full object-cover rounded-xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
