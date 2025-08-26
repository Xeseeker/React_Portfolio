import React from "react";

import { Element } from "react-scroll";
import assets from "../assets/assets.js";

function Home() {
  return (
    <Element name="home" className="section test">
      <div className="mode"></div>
      <div className="layer">
        <div className="outer">
          <h1>
            Hi I'm <span>Siltanu(Xe)</span>{" "}
          </h1>
          <h3>Fullstack Developer</h3>
          <p>
            {" "}
            Hi! I'm Xe, a passionate full-stack web developer and computer
            science student. <br />
            I love solving complex problems and creating intuitive,
            user-friendly experiences. <br />
            Currently, I'm focusing on expanding my knowledge of{" "}
            <b>authentication</b>, <b>APIs</b>, and <b>database management</b>{" "}
            to enhance my full-stack development skills. <br />
            Let’s collaborate and build something amazing!
          </p>
        </div>
        <div className="outerBorder">
          <div className="border">
            <img className="meImage" src={assets.my} alt="" />
          </div>
        </div>
      </div>
      {/* </section> */}
    </Element>
  );
}

export default Home;
