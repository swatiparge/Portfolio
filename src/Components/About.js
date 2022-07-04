import react from "react";
import pen from "../Images/Pen.png";

function About(){
    return(
        <div className="section abouts">
            <img src={pen} alt="Pen" className="pen"/>
            <div className="container">
                <div className="project-counter">
                </div>
                <div className="about">
                    <p>
                        Being a creative developer, I enjoy building beautiful and thoughtful experiences. Currently working as Senior UI Developer at Ignitho.<br/><br/>

                        Fully Professional UI Developer with over 5 years of experience. I am a self-taught developer and it’s something I am incredibly passionate about. I am a dedicated worker and believe in working hard for my clients so they get the most unique and eye-catching UX while remaining professional<br/><br/>

                        For over a decade I had many opportunities to work in a vast spectrum of web technologies that let me gather a significant amount of various experiences.
                        Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.<br/><br/>

                        I'm a developer, designer and linguist who has been building for the web in some capacity since 2016. I specialise in accessibility, performance and usability without sacrificing creativity<br/><br/>
                    </p>
                </div>
            </div>
        </div>
       
    );
}
export default About;