import React from 'react'
import { Element } from 'react-scroll';
import { useState } from 'react';
import axios from 'axios';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile,setMobile]=useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

    
  
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
      }
    
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email.');
        return;
      }

      const formData = {
        name,
        email,
        mobile,
        subject,
        message,
    
      };

      try {
        // Send the form data using Axios to your backend API
        const response = await axios.post( import.meta.env.VITE_BACK_END_URL +'/send-message', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          alert('Message sent successfully!');
        } else {
          alert('Something went wrong!');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Something went wrong!');
      }

      setEmail('');
      setMessage('');
      setMobile('');
      setName('');
      setSubject('');
    }

  return (
    <Element name="contact" className="section">
      <form onSubmit={handleSubmit} className='outer3'>
        <h1>Contact <span style={{color: "rgb(80, 59, 202)"}}>Me!</span></h1>
        <div className='grid'>
        <input className="item2" value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter full name" />
      <  input className="item2" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <input className="item2" value={mobile} onChange={(e)=>setMobile(e.target.value)}  type="text" placeholder="Mobile number" />
        <input className="item2" value={subject} onChange={(e)=>setSubject(e.target.value)}  type="text" placeholder="Email Subject" />
        <input className="item2 item5" value={message} onChange={(e)=>setMessage(e.target.value)}  type="text" placeholder="Your Message" />

        </div>
        <input type="submit" value="submit" style={{ backgroundColor:"#0d1b2a", color: "whitesmoke", border: "2px solid  rgb(80, 59, 202)", borderRadius: "6px", padding: "7px"}} />
      </form>

      <lord-icon
        src="https://cdn.lordicon.com/srsgifqc.json"
        trigger="hover"
        colors="primary:#ffffff"
        style={{ width: "70px", height: "70px",marginLeft:"60px" }}>
      </lord-icon>

      <span>+251962909852</span>
    <div className="social-icons">
      <a href="https://www.instagram.com/xeseeker/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>Xe@instagram</a>
      <a href="https://www.linkedin.com/in/siltanu-kelemwork/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>Xe@linkedIn</a>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i>Xe@facebook</a>
      <a href="https://www.github.com/Xeseeker" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Xe@github</a>
    </div>

  </Element>
  )
}

export default Contact
