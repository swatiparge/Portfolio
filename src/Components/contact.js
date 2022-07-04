import * as React from 'react';
import TextField from '@mui/material/TextField';
import sendMessage from "../Images/send.svg";

function Contact(){
    const sendButton={
        backgroundImage: `url(${sendMessage})`
    };
    return(
        <div className="section" id="contact">
            <div className="contact-container">
                <div className="flex">
                    <span className="heading-span hireme">// Hire me</span>
                    <div className="content-contact">
                        <div className="heading">
                            <h2> Got a Project </h2>
                            <p>I’m interested in freelance opportunities from small to large projects. If you have any request or question, don’t hesitate to reach me at <a href="mailto:swati23793@gmail.com" style={{color: "#AC7023"}}>swati23793@gmail.com</a> or fill the below form. Cheers!!</p>
                            <div className="form">
                                <form>
                                    <div className="grid">
                                         <TextField id="name" label="Name" variant="outlined" required fullWidth/>
                                         <TextField id="name" label="Email" variant="outlined" type="email" required fullWidth/>
                                    </div>
                                    <div >
                                    <TextField fullWidth id="name" label="Message" variant="outlined"  multiline required className="textarea"/>
                                    </div>
                                    <button className="send-message" type="submit" style={sendButton}>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}
export default Contact;