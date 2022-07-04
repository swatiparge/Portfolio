import React from "react";
import logo from '../Images/swati-logo.svg';
import download from '../Images/download.svg';
import resume from "../Images/Swati-Parge.pdf"


function Header() {
    return (
      <div className="">
        <header className="App-header">
          <div className="navHeader">
          <div className="Brand">
              <div><img src={logo} className="App-logo" alt="logo" /></div>
          </div>
          <div className="nav-link">
            <ul className="nav-ul">
              <li className="nav-li" >
               <a href="#work">Work</a>
              </li>
              <li className="nav-li">
              <a href="#portfolio">Portfolio</a>
                
              </li>
              <li>
                <a href={resume} className="download" download> <img src={download} className="App-logo" alt="logo" /> Resume </a>
              </li>
            </ul>
          </div>
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;