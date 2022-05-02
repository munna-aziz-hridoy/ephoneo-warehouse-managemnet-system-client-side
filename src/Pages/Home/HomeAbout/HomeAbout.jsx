import React from "react";
import aboutImg from "../../../assets/images/about.jpg";

const HomeAbout = () => {
  return (
    <div className="container mx-auto my-40">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="w-1/2">
          <h2 className="font-bold text-4xl capitalize text-gray-600 my-5">
            At <span className="text-[#5c2d91]">Ephoneo</span>, we provide a
            unique solution for warehousing space
          </h2>
          <p className="text-lg w-3/4s">
            we are storing all kinds of electronic accesories like phone, smart
            watch. We can store any product or delete and anything we want. If
            you are here to buy something from us, please it will help for a lot
            of getting the products
          </p>
          <button className="text-semibold capitalize bg-[#5c2d91] px-8 py-3 my-10 rounded-lg shadow-lg text-lg text-white">
            about
          </button>
        </div>
        <div className="w-full flex justify-end">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
