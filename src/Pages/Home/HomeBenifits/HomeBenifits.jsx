import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPerson,
  faStepForward,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import homeBenifits from "../../../assets/images/homeBenifits.jpg";

const HomeBenifits = () => {
  return (
    <div className="container p-5  mx-auto my-40">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 flex justify-start">
          <img
            src={homeBenifits}
            alt=""
            className="rounded-xl shadow-lg shadow-[#5c2d9153]"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold text-4xl capitalize text-gray-600 my-5 relative">
            Manage my <span className="text-[#5c2d91]">office</span>
            <span className="absolute bottom-[-16px] left-0  w-40 h-2 rounded-lg bg-[#5c2d91]"></span>
          </h2>

          <div className="md:grid grid-cols-2 gap-5 my-16">
            <div>
              <div className="shadow-2xl shadow-[#5c2d91a3] rounded-full p-3 w-16 h-16 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="text-3xl text-[#5c2d91a3]"
                />
              </div>
              <h2 className="capitalize text-xl font-semibold text-gray-600 my-4">
                Manage stuff
              </h2>
              <p className="text-lg text-gray-500">
                We have some professional stuf to make all our work easily and
                deliver all the product that are ordered
              </p>
            </div>
            <div>
              <div className="shadow-2xl shadow-[#5c2d91a3] rounded-full p-3 w-16 h-16 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faStepForward}
                  className="text-3xl text-[#5c2d91a3]"
                />
              </div>
              <h2 className="capitalize text-xl font-semibold text-gray-600 my-4">
                Our Strategy
              </h2>
              <p className="text-lg text-gray-500">
                We have some strategy to make our company to the next level.
              </p>
            </div>
            <div>
              <div className="shadow-2xl shadow-[#5c2d91a3] rounded-full p-3 w-16 h-16 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-3xl text-[#5c2d91a3]"
                />
              </div>
              <h2 className="capitalize text-xl font-semibold text-gray-600 my-4">
                Manage Delivery system
              </h2>
              <p className="text-lg text-gray-500">
                Our dalivery system is so good for our business. They shipped
                all the product within a short time.
              </p>
            </div>
            <div>
              <div className="shadow-2xl shadow-[#5c2d91a3] rounded-full p-3 w-16 h-16 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-3xl text-[#5c2d91a3]"
                />
              </div>
              <h2 className="capitalize text-xl font-semibold text-gray-600 my-4">
                manage global
              </h2>
              <p className="text-lg text-gray-500">
                Our business is globaly expended. We manage our business from
                multiple country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBenifits;
