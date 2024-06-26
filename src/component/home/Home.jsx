import React from "react";
// import { Button } from "react-bootstrap";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "flowbite-react";
import Particle from "../Particle";
import TypeWritter from "./TypeWritter";
import Home2 from "./Home2";
import Service from "./Service";
// import profilePic from "../assets/profile-pic.jpg";

function Home() {
  const url =
    "https://ideogram.ai/assets/image/lossless/response/ya3Qak5IRU-nwkWHJa63Fw";

  return (
    <section className="">
      <Particle />
      <div className="">
        <div className="container mx-auto px-1 md:px-4 py-10 md:py-20" style={{ pointerEvents: "auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-white ps-3 md:ps-8 text-center md:text-start md:px-6 sm:ps-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 ">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-xl md:text-3xl font-bold mb-4">
                I'M
                <strong className="text-blue-400 text-center">
                  {" "}
                  MD SHAMIM AKHTER
                </strong>
              </h1>
              <div className="text-white text-2xl md:text-3xl mt-2 md:mt-4 mb-6 md:mb-8">
                <TypeWritter />
              </div>
              <Button className="bg-blue-500 flex gap:2 justify-center items-center hover:bg-blue-700 text-white font-medium mx-auto md:mx-0 px-1 rounded focus:outline-none focus:shadow-outline mb-2 md:text-center">
                <FaArrowDown className="mr-2 mt-1"/>
                <div> Download Cv</div>
              </Button>
            </div>
            <div className="md:pl-10">
              <img
                src={url}
                alt="home pic"
                className="w-full md:max-w-lg mx-auto"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
      <Service />
    </section>
  );
}

export default Home;
