import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../assets/briefcase.png";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Avatar} className="h-10 rounded-lg" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-200">
              My Portfolio
            </span>
          </NavLink>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <NavLink to="https://github.com/98atanu" target="_blank">
              <IoLogoGithub className="text-indigo-200 w-5 h-5 cursor-pointer" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/atanu-chakraborty-0542a2203/"
              target="_blank"
            >
              <FaLinkedin className="text-indigo-200 w-5 h-5 cursor-pointer" />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/atanu.chakraborty.355/"
              target="_blank"
            >
              <FaFacebook className="text-indigo-200 w-5 h-5 cursor-pointer" />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/grave_necromancer/"
              target="_blank"
            >
              <GrInstagram className="text-indigo-200 w-5 h-5 cursor-pointer" />
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="bg-indigo-100 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-900 dark:text-indigo-200 hover:underline"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="text-gray-900 dark:text-indigo-200 hover:underline"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  className="text-gray-900 dark:text-indigo-200 hover:underline"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="text-gray-900 dark:text-indigo-200 hover:underline"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
