import React from "react";
// import Particle from "../Particle";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
const url =
  "https://ideogram.ai/assets/progressive-image/balanced/response/MLdW1odZT5ipL482v7pobg";

const About = () => {
  return (
    <section className="about-section ">
      <Particle />
      <div className="container mx-auto px-1 md:px-4">
        <div className="md:px-10 px-4 flex flex-col gap-4 md:gap-8 md:flex-row items-center justify-center md:justify-between py-8 md:py-20">
          <div className="md:w-7/12  text-gray-50">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-50 text-center md:text-start">
              About <span className="text-purple-600">Me</span>
            </h1>
            <AboutCard />
          </div>
          <div className="md:w-5/12 py-8 md:py-0">
            <img
              src={url}
              alt="about"
              className="w-10/12 max-w-md aspect-auto rounded-md ml-6"
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 project-heading text-purple-500 text-center">
          Professional <span className="text-purple-600">Skillset</span>
        </h1>

        <Techstack />
      </div>
    </section>
  );
};

export default About;
