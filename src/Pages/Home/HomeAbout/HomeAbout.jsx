import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../../../assets/images/about.jpg";

const HomeAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5  mx-auto my-40">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold text-4xl capitalize text-gray-600 my-5 relative">
            At <span className="text-[#5c2d91]">Ephoneo</span>, we provide a
            unique solution for warehousing space
            <span className="absolute bottom-[-16px] left-0  w-40 h-2 rounded-lg bg-[#5c2d91]"></span>
          </h2>
          <p className="text-lg w-3/4 mt-10">
            we are storing all kinds of electronic accesories like phone, smart
            watch. We can store any product or delete and anything we want. If
            you are here to buy something from us, please it will help for a lot
            of getting the products
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="text-semibold capitalize hover:bg-[#5c2d91] bg-white px-8 py-3 rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91] my-10"
          >
            blog
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
