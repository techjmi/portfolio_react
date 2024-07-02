import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiGithubBadge,
  DiCss3,
  DiHtml5,
  DiBootstrap,
  
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiJsonwebtokens,
  SiExpress,
  
  
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Techstack() {
  const techStackItems = [
    { icon: DiHtml5, name: "HTML", color: "bg-red-400" },
    { icon: DiCss3, name: "CSS", color: "bg-blue-400" },
    { icon: DiGit, name: "Git", color: "bg-green-400" },
    { icon: DiGithubBadge, name: "GitHub", color: "bg-yellow-400" },
    { icon: DiJavascript1, name: "JavaScript", color: "bg-indigo-400" },
    { icon: DiReact, name: "React.js", color: "bg-purple-400" },
    { icon: FaReact, name: "React Native", color: "bg-pink-400" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "bg-cyan-400" },
    { icon: DiNodejs, name: "Node.js", color: "bg-orange-400" },
    { icon: DiMongodb, name: "MongoDB", color: "bg-teal-400" },
    { icon: SiJsonwebtokens, name: "JWT", color: "bg-blue-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "bg-gray-400" },
    { icon: SiFirebase, name: "Firebase", color: "bg-yellow-400" },
    { icon: SiExpress, name: "Expressjs", color: "bg-gray-400" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-4 justify-center pb-20 w-full px-3 md:px-1 md:w-3/4 mx-auto">
      {techStackItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row  items-center border rounded-lg px-4 py-2 justify-between ${item.color} text-white`}
        >
          {React.createElement(item.icon, { size: 30, className: "text-white mb-2" })}
          <h2 className="text-lg text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
