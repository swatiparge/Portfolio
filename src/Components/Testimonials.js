import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import senem from "../Images/senem.jpeg";
import quote from "../Images/quote.svg";
import naren from "../Images/naren.jpeg";

function Testimonials() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <div className="item" data-value="1">
      <div className="testimonial-block">
          <img src={quote} alt="quote" className="quote-testi"/>
        <p>
          It was an amazing experience for us to work with Swati; she is a
          highly-talented developer with an in-depth expertise; highly
          responsive and result oriented, always accesseble and delivers
          high-quality outcomes on-time. Thanks to her!
        </p>
        <div className="profile flex">
          <img src={senem} alt="Senem Brim" className="profile-pic"/>
          <div className="profile-info">
            <h5>Senem Birim</h5>
            <h6>Founder & Partner, Compport</h6>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
       <div className="testimonial-block">
          <img src={quote} alt="quote" className="quote-testi"/>
        <p>
        Swati has always been flexible with the way she operates and maintains transparency during the project. We know how much effort is going in and whats the outcome of each of those at every stage of the project. This is what drives me to go back to her as I feel the work is done by someone matured and professional. All the best Swati for all your future endeavors
        </p>
        <div className="profile flex">
          <img src={naren} alt="Senem Brim" className="profile-pic"/>
          <div className="profile-info">
            <h5>Naren Raparthi</h5>
            <h6>CEO, Raasta Studios</h6>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="testimonial-block">
          <img src={quote} alt="quote" className="quote-testi"/>
        <p>
        I have come to know about swathi through one of my colleagues.
Three words I would like to say about swati. : hardworking, attention to detail, very professional
for the projects I have worked on with Swati - were completely smooth & professional.
People like swati make you believe that  " if you good at what you do, then you do not need anything else".
        </p>
        <div className="profile flex">
          <img src={naren} alt="Senem Brim" className="profile-pic"/>
          <div className="profile-info">
            <h5>Anusha Vuthaluru</h5>
            <h6>Managing Director, MRAH Advertising</h6>
          </div>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="testi-container">
         <div className="heading">
           <h2 className="testi-heading"> Testimonials</h2>
        </div>
      <div className="testi-border">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          animationType="fadeout"
          disableDotsControls="true"
        />
      </div>
    </div>
  );
}
export default Testimonials;
