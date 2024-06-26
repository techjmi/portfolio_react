import React from "react";

const Service = () => {
  return (
    <div className="mb-5 md:mb-10 md:mx-auto w-full mx-2 md:w-4/5">
      <p className="text-gray-100 text-xl text-center md:text-3xl font-mono font-semibold mb-4 md:mb-10">
        What I Offer
      </p>
      <div className="card grid grid-cols-2 md:grid-cols-4 text-gray-100 gap-4 md:gap-10 w-full">
        <div className="shadow-md border-2 rounded-md backdrop-blur-md hover:scale-105 px-2 bg-blue-500">
          <p className="font-semibold text-lg">Web Development</p>
          <p>
            I provide professional web development services, building responsive
            and user-friendly websites tailored to your needs. From front-end to
            back-end, I've got you covered.
          </p>
        </div>
        <div className="shadow-md border-2 rounded-md backdrop-blur-md hover:scale-105 px-2 bg-green-500">
          <p className="font-semibold text-lg">ReactJS Support</p>
          <p>
            Get expert support for your ReactJS projects, including code
            reviews, bug fixes, and performance optimizations. Let’s make your
            React applications robust and efficient.
          </p>
        </div>
        <div className="shadow-md border-2 rounded-md backdrop-blur-md hover:scale-105 px-2 bg-purple-500">
          <p className="font-semibold text-lg">Online Help</p>
          <p>
            Need assistance with your online presence? I offer comprehensive
            support for website management, content updates, and troubleshooting
            to keep your site running smoothly.
          </p>
        </div>
        <div className="shadow-md border-2 rounded-md backdrop-blur-md hover:scale-105 px-2 bg-red-500">
          <p className="font-semibold text-lg">Technical Support</p>
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
