import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Element } from 'react-scroll';
import assets from '../assets/assets.js';



function Home() {


  const [isClicked,setIsClicked]=useState(true);
  const iconRef = useRef(null);
  const buttonRef = useRef(null);

const changeBackGround=()=>{
  const icon = iconRef.current;
    const btn = buttonRef.current;

    if (isClicked) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      document.getElementById("pp").classList.add("changing");
      btn.classList.remove("change2");
      btn.classList.add("change");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      btn.classList.remove("change");
      btn.classList.add("change2");
    }

}

const handleToggle = () => {
  setIsClicked((prev) => {
    const newState = !prev;
    changeBackGround();
    return newState;
  });
};


  return (
    <Element name="home" className="section">
      
   
        <div className="mode">
  
</div>
<div className="layer">
<div className="outer">
    <h1>Hi I'm Siltanu(Xe) </h1>
    <h3>Fullstack Developer</h3>
    <p> Hi! I'm Xe, a passionate full-stack web developer and computer science student. <br/>   
  I love solving complex problems and creating intuitive, user-friendly experiences. <br/>  
  Currently, I'm focusing on expanding my knowledge of <b>authentication</b>, <b>APIs</b>, and <b>database management</b> to enhance my full-stack development skills.   <br/>
  Let’s collaborate and build something amazing!</p>
   </div >
   <div className='outerBorder'>
    
   <div className='border'>
   <img className="meImage" src={assets.meImage} alt="" />
   </div>
   
   </div>
   
   
   </div>
      {/* </section> */}
    </Element>
  );
}

export default Home
