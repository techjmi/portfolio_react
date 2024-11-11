import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImDisplay } from "react-icons/im";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaExternalLinkAlt,} from "react-icons/fa";
import { Button } from "flowbite-react";
import profile from '../Assets/profileImg.jpg'

const Navbar = ({dark, handleDarkMode}) => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const closeMenu = () => {
    setExpand(false);
  };

  return (
    <>
      <div
        className={`text-gray-900 sticky top-0 z-50 px-2 md:px-8 ${
          navColour ? "sticky" : "navbar"
        }`}
      >
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={profile} alt="Brand Logo" width={50} height={50} className="rounded-full" />
                {/* <p className="text-white">Md Shamim Akhter</p> */}
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="text-slate-100 px-3 py-2 rounded-md text-sm md:text-lg font-medium flex items-center"
                onClick={closeMenu}
              >
                <AiOutlineHome className="mr-2 size-6" />
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-100 md:text-lg px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={closeMenu}
              >
                <AiOutlineUser className="mr-2 size-6" />
                About
              </Link>
              <Link
                to="/projects"
                className="text-slate-100 md:text-lg  px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={closeMenu}
              >
                <ImDisplay className="mr-2 size-5" />
                Projects
              </Link>
              <a
                href="https://blog-mern-cfpm.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 md:text-lg px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <FaExternalLinkAlt className="mr-2 size-6" />
                Blogs
              </a>
            </div>
            {/* <button
  onClick={() =>
    handleDarkMode((previousDarkMode) => !previousDarkMode)
  }
  className="save button"
>
  {dark ? <FaMoon /> : <FaSun />} 
</button> */}
          
            <div className="hidden md:block">
              <Link to="/contact" className="text-decoration-none">
                <button
                  className="text-slate-100 md:text-lg border-2 border-login-border px-3 py-1 rounded-md text-sm font-medium flex"
                  onClick={closeMenu}
                >
                  <IoCallOutline className="mr-2 size-6" />
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleExpand}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-menu-gray hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {expand ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${expand ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className=" text-gray-100 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <AiOutlineHome className="mr-1" />
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-100 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <AiOutlineUser className="mr-1" />
              About
            </Link>
            <Link
              to="/projects"
              className=" text-gray-100 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={closeMenu}
            >
              <ImDisplay className="mr-1" />
              Projects
            </Link>
            <a
              href="https://blog-mern-cfpm.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-100 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaExternalLinkAlt className="mr-1" />
              Blogs
            </a>
          </div>
          <div className="px-3 py-2">
            <Link to="/contact" className="text-decoration-none flex">
              <Button
                className="w-full text-gray-100 hover:text-black border-2 border-login-border px-3 py-2 rounded-md text-base font-medium flex items-center flex-row"
                onClick={closeMenu}
              >
                <IoCallOutline className="mr-1" />
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
