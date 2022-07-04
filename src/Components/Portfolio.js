import react from "react";
import compport from "../Images/compport.jpeg";
import raastamb from "../Images/raasta-mb.jpg";
import marutmb from "../Images/marut-mb.jpg";
import masterverk from "../Images/masterverk.jpg";

// import tooltech from "../Images/tooltech.jpeg";
import dhruvaspace from "../Images/dhruvaspace.jpeg";
import portfolioBorder from "../Images/portfolio-border.svg";



function Portfolio() {
  return (
    <div className="section" id="portfolio">
        <img src={portfolioBorder} alt="Border" className="portfolio-border"/>
      <div className="container-port">
        <div className="heading">
          <h2><p className="heading-p">// Selected</p>
            Portfolio 
          </h2>
        </div>
        <div className="masonary-grid">
        <div className="grid-item">
            <a href="https://www.compport.com/" target="_blank">
                <img src={compport} />
            </a>
        </div>
        <div className="grid-item">
            <a href="https://raastastudios.com/ " target="_blank">
                <img src={raastamb} />
            </a>
        </div>
        <div className="grid-item">
            <a href="https://www.dhruvaspace.com/" target="_blank">
                 <img src={dhruvaspace} />
            </a>
        </div>
        <div className="grid-item">
            <a href="https://www.masterverk.in/" target="_blank">
                 <img src={masterverk} />
            </a>
        </div>
        <div className="grid-item">
            <a href="https://marutdrones.com/" target="_blank">
                 <img src={marutmb} />
            </a>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Portfolio;
