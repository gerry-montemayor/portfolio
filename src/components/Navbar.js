import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./css/navbar.css"
import home_icon from "./imgs/homeicon.png"


const Navbar = () => {
  return(
    <nav class="navbar">
      <div class="title">
      <h1>GM.</h1>
      </div>
      <div class="nav-items">
        <ul>
          <li class="nav-link">
            <img src={home_icon}></img>
            <Link to="/home" class="nav-link">Home</Link>
          </li>
          <li class="nav-link">
            <Link to="/projects" class="nav-link">Projects</Link>
          </li>
          <li class="nav-link">
            <Link to="/resume" class="nav-link">Resume</Link>
          </li>
          <li>
            <button>O</button>
          </li>
        </ul>
      </div>


    </nav>
  )
}

export default Navbar;

// const Navbar = () => {
//   return (
//   <nav class="navbar">
//     <div class="nav-header">GM</div>
//     <a href="#" class="toggle-button">
//       <span class="bar"></span>
//       <span class="bar"></span>
//       <span class="bar"></span>

//     </a>
//     <div class="navbar-links">
//       <ul>
//         <li>
//           <Link to="/home">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/resume">Resume</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   );
// }

// export default Navbar;