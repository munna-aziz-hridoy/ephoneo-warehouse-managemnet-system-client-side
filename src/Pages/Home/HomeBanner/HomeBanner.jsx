import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../../assets/images/banner-1.png";
import banner2 from "../../../assets/images/banner-2.png";
import banner3 from "../../../assets/images/banner-3.png";

// import required modules
import { Pagination } from "swiper";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={banner1} alt="" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
            <h2 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
              we are here to store the product you need
            </h2>
            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
              Our business is to store all the accesories and phones that you
              need in your daily life. We are the distrubutor all over the
              country
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner2} alt="" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
            <h2 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
              the uniqe of collection
            </h2>
            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
              We are not any casual dealer. Our employee stores the collection
              and supply as wholesale.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner3} alt="" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
            <h2 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
              safe and all product are kept carefully
            </h2>
            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
              Our policy is to keep the product as like new. We always try to
              give a best services and quality product for out customer.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
