import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Typewriter.css';
// import '../Pages/style.css'
const TypeWriter = () => {
 

  return (
    <div className='typewriter-text'>
      <TypeWriterEffect
        textStyle={{
          fontWeight: 800,
          color: "#FFA001",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "Hi, I'm Hamed Hasan at Empowering Energy",
          "Crafting Excellence with Empowering Energy",
          "Enthusiastic Data Scientist at Empowering Energy",
          "Mastering the MERN Stack at Empowering Energy",
          "Weaving Magic as a Front End Maestro at Empowering Energy",
          "Architecting Backends with Precision at Empowering Energy",
          "Fueling Innovation with React.js at Empowering Energy",
          "Designing Dreams as a Graphic Virtuoso at Empowering Energy",
          "Pioneering Professionalism as a Full Stack Developer at Empowering Energy"
        ]}
        multiTextDelay={1000}
        typeSpeed={80}
      />
    </div>
  );
};

export default TypeWriter;
