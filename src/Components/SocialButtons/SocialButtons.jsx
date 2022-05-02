import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialButtons = () => {
  return (
    <div className="w-full flex justify-center items-center mb-28 gap-7">
      <button className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]">
        <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
      </button>
      <button className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]">
        <FontAwesomeIcon icon={faGithub} className="text-3xl" />
      </button>
      <button className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]">
        <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
      </button>
    </div>
  );
};

export default SocialButtons;
