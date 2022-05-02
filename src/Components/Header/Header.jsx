import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import profilePhoto from "../../assets/images/profile.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userExpend, setUserExpend] = useState(false);
  const user = true;
  const headerItem = [
    { id: 1, name: "home", link: "/" },
    { id: 2, name: "inventory", link: "/inventory" },
    { id: 3, name: "add item", link: "/addproduct" },
    { id: 4, name: "blog", link: "/blog" },
  ];
  return (
    <header className="h-[90px] shadow-lg flex justify-center items-center">
      <nav className="container mx-auto h-full flex justify-between items-center relative">
        <div className="h-[80px]">
          <img src={logo} className="w-full h-full" alt="" />
        </div>
        <div
          className={`w-full lg:w-fit h-fit lg:h-full p-8 ${
            menuOpen ? "top-24" : "top-[-900px]"
          } duration-200 lg:duration-[0] rounded-lg shadow-lg lg:shadow-none text-center  lg:flex justify-between items-center gap-20 absolute lg:static z-50 bg-white`}
        >
          <ul className="lg:flex justify-center items-center gap-1">
            {headerItem.map((item) => (
              <CustomLink
                to={item.link}
                setMenuOpen={setMenuOpen}
                key={item.id}
              >
                {item.name}
              </CustomLink>
            ))}
          </ul>
          {user ? (
            <div className="bg-[#5c2d91] p-3 flex justify-center items-center gap-6 rounded-lg relative">
              <Link
                onClick={() => setMenuOpen(false)}
                to="/myitems"
                className="text-xl font-semibold capitalize text-slate-100"
              >
                my items
              </Link>
              <div
                className="bg-slate-200 w-[55px] h-[55px] rounded-full p-1 flex justify-center items-center"
                onClick={() => setUserExpend(!userExpend)}
              >
                <img src={profilePhoto} alt="" className="rounded-full" />
              </div>
              <div
                className={`${
                  userExpend ? "block" : "hidden"
                } absolute w-1/2 lg:w-[150%] shadow-lg rounded-lg h-32 top-28 left-1/4 lg:left-[-90px]`}
              >
                <h2 className="text-lg font-semibold text-gray-500 capitalize">
                  user@email.com
                </h2>
                <button className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] my-6 w-2/3">
                  log out
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border-2 border-[#5c2d91]  p-5 flex justify-center items-center gap-6 rounded-lg">
              <Link
                to="/login"
                className="text-xl font-semibold capitalize text-[#5c2d91] "
              >
                login
              </Link>
              <Link
                to="/register"
                className="text-xl font-semibold capitalize text-[#5c2d91] "
              >
                register
              </Link>
            </div>
          )}
        </div>
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="text-2xl text-[#5c2d91] cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
