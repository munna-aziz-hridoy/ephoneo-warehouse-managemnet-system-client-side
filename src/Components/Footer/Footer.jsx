import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faEnvelope,
  faLocationPin,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#19092c]">
      <div className="container mx-auto sm:grid grid-cols-2 lg:grid-cols-4 gap-20">
        <div>
          <h2 className="text-2xl font-semibold capitalize my-5 text-slate-100">
            about
          </h2>
          <p className="text-md text-slate-200">
            Ephoneo is a inventory management system app. This app contain some
            feature about manage and add product to the store and reduce them
            when delivered
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold capitalize my-5 text-slate-100">
            quick links
          </h2>
          <div className="flex justify-left items-center gap-5">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="text-md text-slate-300 hover:text-slate-50  my-4"
            />
            <Link
              to="/"
              className="text-md text-slate-300 hover:text-slate-50 capitalize my-1"
            >
              home
            </Link>
          </div>
          <div className="flex justify-left items-center gap-5">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="text-md text-slate-300 hover:text-slate-50  my-4"
            />
            <Link
              to="/about"
              className="text-md text-slate-300 hover:text-slate-50 capitalize my-1"
            >
              about
            </Link>
          </div>
          <div className="flex justify-left items-center gap-5">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="text-md text-slate-300 hover:text-slate-50  my-4"
            />
            <Link
              to="/blogs"
              className="text-md text-slate-300 hover:text-slate-50 capitalize my-1"
            >
              blogs
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold capitalize my-5 text-slate-100">
            contact info
          </h2>
          <p>
            <FontAwesomeIcon
              icon={faLocationPin}
              className="text-slate-400 text-xl mr-5"
            />
            <span className="text-md text-slate-300 hover:text-slate-50 capitalize my-1">
              123, 43/h house, Dummy City, FL-12345 USA
            </span>
          </p>
          <p className="my-6">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-slate-400 text-xl mr-5"
            />
            <span className="text-md text-slate-300 hover:text-slate-50 capitalize my-1">
              +123 456 789, +098 765 4321
            </span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-slate-400 text-xl mr-5"
            />
            <span className="text-md text-slate-300 hover:text-slate-50  my-1">
              ephoneo@hotmail.com
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold capitalize my-5 text-slate-100">
            send us email
          </h2>
          <form className="flex flex-col justify-center items-start">
            <input
              name="email"
              className="p-3 rounded-lg my-2"
              placeholder="your email"
            />
            <textarea
              name="message"
              id=""
              cols="23"
              rows="3"
              className="p-3 rounded-lg my-2"
              placeholder="your message"
            ></textarea>
            <input
              type="submit"
              className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 my-1 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] cursor-pointer"
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
