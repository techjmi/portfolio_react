import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <div className="rounded-lg  text-gray-50 backdrop-blur-md">
      <blockquote className="text-lg font-medium mb-4 text-gray-800">
        <p className="text-justify  text-gray-50">
          Greetings, I'm &nbsp;
          <span className="text-purple-600">Md Shamim Akhter</span>, a budding
          MERN (MongoDB, Express.js, React, Node.js) developer with a strong
          appetite for learning and a knack for problem-solving.
          <br />
          <br />
          As a fresher, I'm dedicated to crafting web applications with a
          unique, contemporary look-and-feel. My journey in web development has
          just begun, and I approach it with enthusiasm, ready to tackle
          challenges and create innovative solutions.
          <br />
          <br />
          Explore my work in the{" "}
          <Link to="/projects" className="text-purple-600">
            Projects
          </Link>{" "}
          section.
          <br />
          <br />
          You're welcome to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/md-shamim-akhter-b12624193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-purple-600"
          >
            LinkedIn
          </a>
          .
          <br />
          <br />
          I'm open to job opportunities where I can contribute, learn, and grow.
          If you have a fitting opportunity, please feel free to contact Me
          <Link to='/contact' className="z-50">
          <button className="mt-3 bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center">
            <IoCallOutline className="me-2" />
            Contact Me
          </button>
          </Link>
        </p>
      </blockquote>
    </div>
  );
}

export default AboutCard;
