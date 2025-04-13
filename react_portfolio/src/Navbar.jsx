import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
 <nav>
  <div className='mm'>🅧ə</div>
  <div className='par'>
  <Link to="home" smooth={true} duration={500}>
        <p>Home</p>
      </Link>
      <Link to="skill" smooth={true} duration={500}>
       <p>Skills</p> 
      </Link>
      <Link to="project" smooth={true} duration={500}>
       <p>Project</p> 
      </Link>
      <Link to="contact" smooth={true} duration={500}>
       <p>Contact</p> 
      </Link>
  </div>
   
 </nav>
  )
}

export default Navbar
