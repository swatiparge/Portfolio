import React from "react";
import compport from "../Images/compport-client.png";
import dhruvaspace1 from "../Images/dhruvaspace-client.png";
import bannerImg from "../Images/banner-img.png";
import immeriveFrame from "../Images/immersive-client.png";
import raastastudios from "../Images/raasta-client.png";


function Banner() {
  return (
    <div className="section banner-section">
      <div className="container">
        <div className="bannerBlock">
          <div className="banner-content">
            <h1>
              Hello,
              <br />
              I'm Swati
            </h1>
            <p>
              // I design and code beautifully simple things, and I love what I
              do.
            </p>
            <div>
             <ul>
               <li><img src={compport} alt="Compport"/></li>
               <li><img src={dhruvaspace1} alt="Dhruva Space"/></li>
               <li><img src={raastastudios} alt="Raasta studio"/></li>
               <li><img src={immeriveFrame} alt="Immersive Frame"/></li>

              </ul>
            </div>
          </div>
          <div className="bannerImg">
            <img src={bannerImg} alt="Banner" />
            <div className="let-connect">
                <div className="wrap-rel">
                    <div className="wrap">
                        <a href="#contact">Let's <br/>Connect</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
