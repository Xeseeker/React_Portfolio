import React from 'react';
import assets from '..//assets/assets.js';
import { Element } from 'react-scroll';

function Skill() {
  return (
  <Element name="skill" className="section">
   
      
        <div className="banner">
      <div className="slider" style={{ "--quantity": 9 }}>
  
         <div className="item" style={{"--position": 1}}> <img src={assets.C_Plus} /> </div>
         <div className="item" style={{"--position": 2}}> <img src={assets.css} /> </div>
         <div className="item" style={{"--position": 3}}> <img src={assets.java} /> </div>
         <div className="item" style={{"--position": 4}}> <img src={assets.Node} /> </div>
         <div className="item" style={{"--position": 5}}> <img src={assets.html} /> </div>
         <div className="item" style={{"--position": 6}}> <img src={assets.js} /> </div>
         <div className="item" style={{"--position": 7}}> <img src={assets.postG} /> </div>
         <div className="item" style={{"--position": 8}}> <img src={assets.react} /> </div>
          <div className="item" style={{"--position": 9}}> <img src={assets.md} /> </div>
      </div>
    
    </div>

    <div className="skills-section">
    <h2>My <span>Skills</span></h2>

    <div className="skills-container">
          {/*  Coding Skills  */}
          <div className="skills-box">
              <h3>Coding Skills</h3>
              <div className="skill">
                  <p>HTML <span>95%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "95%"}}></div></div>
              </div>
              <div className="skill">
                  <p>CSS <span>80%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "80%"}}></div></div>
              </div>
              <div className="skill">
                  <p>JavaScript <span>90%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "90%"}}></div></div>
              </div>
              <div className="skill">
                  <p>React <span>90%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "90%"}}></div></div>
              </div>
              <div className="skill">
                  <p>Node Js <span>95%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "95%"}}></div></div>
              </div>
             
          </div>
  
          {/* Professional Skills  */}
          <div className="skills-box">
              <h3>Soft Skills</h3>
              <div className="skill">
                  <p>Problem-Solving <span>95%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "95%"}}></div></div>
              </div>
              <div className="skill">
                  <p>Teamwork <span>90%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "90%"}}></div></div>
              </div>
              <div className="skill">
                  <p>Time Management <span>96%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "96%"}}></div></div>
              </div>
              <div className="skill">
                  <p>Communication  <span>95%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "90%"}}></div></div>
              </div>
              <div className="skill">
                  <p>Adaptability <span>90%</span></p>
                  <div className="progress-bar"><div className="progress" style={{width: "90%"}}></div></div>
              </div>
          </div>
      </div>

    </div>
         
    
  </Element>
  )
}

export default Skill
