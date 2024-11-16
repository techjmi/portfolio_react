import React from "react";
import { FaCode, FaReact, FaLaptopCode, FaTools } from "react-icons/fa";
const Service = () => {
  return (
    <div className="mb-10 md:mb-20 md:mx-auto w-full px-4 md:px-0 md:w-4/5">
      <p className="text-gray-100 text-2xl text-center md:text-4xl font-mono font-semibold mb-8 md:mb-12">
        What I Offer
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {/* Web Development */}
  <div className="relative text-white shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-blue-500 cursor-pointer group">
    <div className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-40 bg-blue-400 transition duration-300"></div>
    <FaCode className="text-3xl text-white mx-auto mb-4" />
    <p className="font-semibold text-xl text-center text-white mb-2">Web Development</p>
    <p className="text-center text-white">
      Crafting responsive and user-friendly websites tailored to your needs.
    </p>
  </div>

  {/* ReactJS Support */}
  <div className="relative shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-green-500 cursor-pointer group">
    <div className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-40 bg-green-400 transition duration-300"></div>
    <FaReact className="text-3xl text-white mx-auto mb-4" />
    <p className="font-semibold text-xl text-center text-white mb-2">ReactJS Support</p>
    <p className="text-center text-white">
      Expert guidance for your React projects, from bug fixes to optimization.
    </p>
  </div>

  {/* Online Help */}
  <div className="relative shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-purple-500 cursor-pointer group">
    <div className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-40 bg-purple-400 transition duration-300"></div>
    <FaLaptopCode className="text-3xl text-white mx-auto mb-4" />
    <p className="font-semibold text-xl text-center text-white mb-2">Online Help</p>
    <p className="text-center text-white">
      Comprehensive support for managing and updating your online presence.
    </p>
  </div>

  {/* Technical Support */}
  <div className="relative shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-red-500 cursor-pointer group">
    <div className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-40 bg-red-400 transition duration-300"></div>
    <FaTools className="text-3xl text-white mx-auto mb-4" />
    <p className="font-semibold text-xl text-center text-white mb-2">Technical Support</p>
    <p className="text-center text-white">
      Reliable solutions to resolve technical issues and enhance system stability.
    </p>
  </div>
</div>
    </div>
  );
};

export default Service;
