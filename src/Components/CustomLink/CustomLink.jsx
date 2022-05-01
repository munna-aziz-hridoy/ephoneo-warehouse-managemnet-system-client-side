import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

const CustomLink = ({ children, to, ...props }) => {
  const resolve = useResolvedPath(to);
  const match = useMatch({ path: resolve.pathname, end: true });
  return (
    <li className="px-6 relative menu-item my-3 lg:my-0 w-[18%] lg:w-fit mx-auto">
      <Link
        to={to}
        {...props}
        className={`text-xl font-semibold capitalize ${
          match ? "text-[#5c2d91]" : "text-gray-400"
        } hover:text-[#5c2d91]`}
      >
        {children}
      </Link>
      <div className="h-1 rounded-full bg-[#5c2d91] absolute left-0"></div>
    </li>
  );
};

export default CustomLink;
