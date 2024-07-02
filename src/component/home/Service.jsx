import React from "react";

const Service = () => {
  return (
    <div className="mb-10 md:mb-20 md:mx-auto w-full px-4 md:px-0 md:w-4/5">
      <p className="text-gray-100 text-2xl text-center md:text-4xl font-mono font-semibold mb-8 md:mb-12">
        What I Offer
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="card animated-border shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-blue-500">
          <p className="font-semibold text-lg mb-2">Web Development</p>
          <p>
            I provide professional web development services, building responsive
            and user-friendly websites tailored to your needs. From front-end to
            back-end, I've got you covered.
          </p>
        </div>
        <div className="   shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-green-500">
          <p className="font-semibold text-lg mb-2">ReactJS Support</p>
          <p>
            Get expert support for your ReactJS projects, including code
            reviews, bug fixes, and performance optimizations. Let’s make your
            React applications robust and efficient.
          </p>
        </div>
        <div className="  shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-purple-500">
          <p className="font-semibold text-lg mb-2">Online Help</p>
          <p>
            Need assistance with your online presence? I offer comprehensive
            support for website management, content updates, and troubleshooting
            to keep your site running smoothly.
          </p>
        </div>
        <div className=" shadow-lg border-2 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 bg-red-500">
          <p className="font-semibold text-lg mb-2">Technical Support</p>
          <p>
            Facing technical issues? I provide reliable technical support to
            resolve software problems, ensure system stability, and enhance your
            overall technology experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
