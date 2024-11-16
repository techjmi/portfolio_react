import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 md:py-8 backdrop-blur-lg">
      <div className="container mx-auto px-4 w-full md:w-4/5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-sm md:text-xl">
              Made With <FaHeart className="inline text-red-500" /> &nbsp;By
              <span className="underline"> Md Shamim Akhter</span>
            </h3>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-sm md:text-xl">
              Copyright © {year} Md Shamim Akhter
            </h3>
          </div>
          <div className="text-center md:text-right">
          <ul className="flex space-x-4 ">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=100047398065321"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
  >
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
      Facebook
    </span>
    <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-blue-500 transition duration-300"></div>
    <BsFacebook size="1.5em" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/mernvibes/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-110"
  >
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
      Instagram
    </span>
    <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-pink-500 transition duration-300"></div>
    <BsInstagram size="1.5em" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/techjmi"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-900 transition duration-300 transform hover:scale-110"
  >
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
      GitHub
    </span>
    <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-gray-700 transition duration-300"></div>
    <BsGithub size="1.5em" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/md-shamim-akhter-b12624193"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110"
  >
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
      LinkedIn
    </span>
    <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-blue-400 transition duration-300"></div>
    <BsLinkedin size="1.5em" />
  </a>
</ul>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
