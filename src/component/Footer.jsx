import React from "react";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";

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
              <li>
                <a
                  href="https://github.com/techjmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub className="text-3xl text-black" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-shamim-akhter-b12624193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedinIn className="text-3xl text-blue-700" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
