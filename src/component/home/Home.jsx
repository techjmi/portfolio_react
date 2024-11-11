import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "flowbite-react";
import Particle from "../Particle";
import TypeWritter from "./TypeWritter";
import Home2 from "./Home2";
import Service from "./Service";
import resume from '../../Assets/Md_Shamim_Resume.pdf'
import CheckOut from "../CheckOut";
function Home() {
  const[ad,setAd]= useState(false)
  const handleDownload = () => {
    // const pdfUrl = process.env.PUBLIC_URL + './Shamim_Resume.pdf'; 
    const pdfUrl=resume
    console.log(pdfUrl)
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = pdfUrl;
    a.download = 'Shamim_Resume.pdf';
    // Append the anchor element to the body
    document.body.appendChild(a);
    // Trigger the click event of the anchor element
    a.click();
    // Clean up
    document.body.removeChild(a);
  };

  const url =
    "https://ideogram.ai/assets/image/lossless/response/ya3Qak5IRU-nwkWHJa63Fw";

    useEffect(()=>{
      const timer= setTimeout(()=>{
        setAd(true)

      },3000)
      return () => clearTimeout(timer);
    },[])
const handleClosed=()=>{
  setAd(false)
}
  return (
    <section className="">
      <Particle />
      {ad && (
        <div className="overlay">
          <CheckOut ad={ad} handleClosed={handleClosed} />
        </div>
      )}
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
              <Button className=" bg-blue-500 flex gap:2 justify-center items-center hover:bg-blue-700 text-white font-medium mx-auto md:mx-0 px-1 rounded focus:outline-none focus:shadow-outline mb-2 md:text-center" onClick={handleDownload}>
                <FaArrowDown className="mr-2 mt-1"/>
               Download Cv
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
