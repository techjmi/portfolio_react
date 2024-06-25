import React from 'react'
import Typewriter from 'typewriter-effect'
const TypeWritter = () => {
  return (
    <div>
      <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "ReactJs Developer",
          "React Native Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  )
}

export default TypeWritter
