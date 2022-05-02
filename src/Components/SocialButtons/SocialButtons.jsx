import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialButtons = () => {
  return (
    <div className="w-2/3 flex justify-center items-center">
      <button className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]">
        <FontAwesomeIcon icon={["fab", "google"]} />
      </button>
    </div>
  );
};

export default SocialButtons;
