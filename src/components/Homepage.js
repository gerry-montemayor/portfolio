import React from 'react';
import Navbar from './Navbar'
import "./css/homepage.css"
import selfie from "./imgs/selfie.jpg"



const Homepage = () => {
  return (
    <div class="homepage-container">
      <Navbar />
      <div class="content-container">
        <img class="selfie" src={selfie}></img>
        <div class="about-me">
          <h1>Hello, I'm Gerry! <inline class="waving-hand">&#x1F44B;</inline></h1>
          <h2> I'm a student at Cornell University studying Computer Science.
            I am passionate about problem solving and create useful and powerful applications.
          </h2>
        </div>
      </div>
    </div>

  );
}

export default Homepage;