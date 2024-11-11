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
            <h3 className="text-lg md:text-xl">
              Made With <FaHeart className="inline text-red-500" /> &nbsp;By
              <span className="underline"> Md Shamim Akhter</span>
            </h3>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-lg md:text-xl">
              Copyright © {year} Md Shamim Akhter
            </h3>
          </div>
          <div className="text-center md:text-right">
            <ul className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100047398065321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:scale-110"
              >
                <BsFacebook size="1.5em" />
              </a>
              <a
                href="https://www.instagram.com/mernvibes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 hover:shadow-xl transition duration-300 transform hover:scale-110"
              >
                <BsInstagram size="1.5em" />
              </a>
              <a
                href="https://github.com/techjmi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-900 hover:shadow-xl transition duration-300 transform hover:scale-110"
              >
                <BsGithub size="1.5em" />
              </a>
              <a
                // href="www.linkedin.com/in/md-shamim-akhter-b12624193"
                href="https://www.linkedin.com/in/md-shamim-akhter-b12624193"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 transform hover:scale-110"
              >
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
