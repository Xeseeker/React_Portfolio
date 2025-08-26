import React from "react";
import { Element } from "react-scroll";
import assets from "../assets/assets.js";

function Project() {
  return (
    <Element name="project" className="section">
      <div className="h3">Some Projects</div>
      <div className="outer2">
        <div className="inner">
          <img src={assets.e_commerce} alt="" />
          <p>
            This e-commerce website is a full-stack application built to provide
            users with a seamless shopping experience.various payment methods,
            including Cash on Delivery, Stripe, and Chapa.{" "}
          </p>
          <a href="https://github.com/Xeseeker/CodeAlpha_E-commerce-store">
            Visit
          </a>
        </div>
        <div className="inner">
          <img src={assets.Rock} alt="" />
          <p>
            {" "}
            This is an interactive Rock-Paper-Scissors game that offers multiple
            play modes, including playing with another person, playing against
            the computer, and an auto-play feature.{" "}
          </p>
          <a href="https://github.com/Xeseeker/Rock_Paper_Scissor">Visit</a>
        </div>
        <div className="inner">
          <img src={assets.Music} alt="" />
          <p>
            This Music Player is a dynamic web application that allows users to
            browse and listen to their favorite songs by different artists.
            Users can select an artist, view a list of tracks, and play the
            selected song.{" "}
          </p>
          <a href="https://github.com/Xeseeker/MusicPlayer">Visit</a>
        </div>
        <div className="inner">
          <img src={assets.social} alt="" />
          <p>
            This Social media is a dynamic web application that allows users to
            follow,like and comment to posts. Users can post , view their
            history, and interact with others post.{" "}
          </p>
          <a href="https://github.com/Xeseeker/CodeAlpha_Social_Media-app">
            Visit
          </a>
        </div>
        <div className="inner">
          <img src={assets.chat} alt="" />
          <p>
            A real-time chat web application that enables users to send and
            receive instant messages seamlessly. The app provides a smooth and
            interactive communication experience using WebSockets (Socket.IO) to
            deliver messages without delays.{" "}
          </p>
          <a href="https://github.com/Xeseeker/Full_chat_app_with_React">
            Visit
          </a>
        </div>
        <div className="inner">
          <img src={assets.camera} alt="" />
          <p>
            A mobile camera application built with React Native that enables
            users to capture photos and manage them directly on their devices.
            The app provides a simple and intuitive interface with smooth camera
            functionality.{" "}
          </p>
          <a href="https://github.com/Xeseeker/camera_app">Visit</a>
        </div>
        <div className="inner">
          <img src={assets.clinic} alt="" />
          <p>
            Developed using Java, the system allows for easy management of
            patient records, appointments, medical staff, and billing. The
            project aims to automate many of the tasks typically handled
            manually.{" "}
          </p>
          <a href="https://github.com/Xeseeker/Simple_Clinic_mangnment_with_Java">
            Visit
          </a>
        </div>

        <div className="inner">
          <img src={assets.wheather} alt="" />
          <p>
            This Weather App provides real-time weather updates, including
            temperature, humidity, wind speed, and weather conditions for any
            city around the world. The app fetches data from a weather API.{" "}
          </p>
          <a href="https://github.com/Xeseeker/weather-app">Visit</a>
        </div>
        <div className="inner">
          <img src={assets.travel} alt="" />
          <p>
            The Family Travel Tracker is a web application designed to help
            families track their travels and the countries they have visited. It
            allows users to add and view countries they've visited.{" "}
          </p>
          <a href="https://github.com/Xeseeker/Tracking_a_family_trip">Visit</a>
        </div>
      </div>
    </Element>
  );
}

export default Project;
