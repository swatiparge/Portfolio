import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import autonomy from "../Images/autonomy-logo.svg";
import backgroundCheck from "../Images/square-check.svg";
import workBorder from "../Images/work-border.svg";


function WorkTab(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="worktab"
      hidden={value !== index}
      id={`vertical-worktab-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

WorkTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-worktab-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const myStyle={
    backgroundImage: `url(${backgroundCheck})`
};

  return (
      
   <div className="section" id="work">
       <img src={workBorder} alt="Border" className="work-border"/>
       <div className="work-container">
       <div className="heading">
           <h2> <span style={{background: "#fff"}}>Work</span> <span className="heading-span">// Experience</span></h2>
        </div>
       <div className="work-tab-content">
       <Box
      sx={{ display: 'flex'}}
    >
       
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', textAlign: 'left' }}
        className="workTabs"
      >
        <Tab label="Autonomy Network" {...a11yProps(0)} />
        <Tab label="Ignitho Techonology" {...a11yProps(1)} />
        <Tab label="Whitenoise Design" {...a11yProps(2)} />
        <Tab label="Animagix Design Studio" {...a11yProps(3)} />
        <Tab label="Oyster Technology" {...a11yProps(4)} />
      </Tabs>
      <WorkTab value={value} index={0} className="tab-content">
        <h2>FrontEnd Engineer</h2>
        <div className="flex duration">
            <p> Aug 2022 - Present</p>
            <p> Hyderabad</p>
        </div>
        <div>
            <ul>

            <li style={myStyle}>The front-end use HTML5, CSS, ReactJS, jQuery & Bootstrap to build a single page web app that communicates/work with RESTful API.</li>
                <li style={myStyle}>Implementing UI Mockups integrating the third party REACT libraries.</li>
                <li style={myStyle}>Using ReactJs to implement rich functions in a various page, validation, CRUD, grid list, search, sort, pagination, muti-selection, tags-input,</li>
                <li style={myStyle}>Performs Unit testing with web-services with RESTful API.</li>
                <li style={myStyle}>Coordinating with UX Designer & Backend developer for Standards Procedure</li>

               
            </ul>
        </div>
      </WorkTab>
      <WorkTab value={value} index={1} className="tab-content">
      <h2>Senior Software Engineer</h2>
        <div className="flex duration">
            <p> Nov 2021 - July 2022</p>
            <p> Bangalore</p>
        </div>
        <div>
            <ul>
            <li style={myStyle}>Worked extensively on Bootstrap, Restful web-services, HTML5, CSS2/3, wordpress, Media queries for responsiveness.</li>
                <li style={myStyle}>Using CSS Pre-processors SASS, LESS for developing a rich styling web app.</li>
                <li style={myStyle}>Coordinating with a remote team and applying appropriate branching, labelling using GIT</li>
                <li style={myStyle}>Coordinating with UX Designer & Backend developer for Standards Procedure</li>

            </ul>
        </div>
      </WorkTab>
      <WorkTab value={value} index={2} className="tab-content">
      <h2>Interactive Developer</h2>
        <div className="flex duration">
            <p> Dec 2019 - Aug 2021</p>
            <p> Hyderabad</p>
        </div>
        <div>
            <ul>

                <li style={myStyle}>Developed the user interface with HTML, HTML5, CSS, CSS3, Javascript, jQuery</li>
                <li style={myStyle}>Worked on CMS platform WordPress and Webflow(worked on 10+ Websites)</li>
                <li style={myStyle}>Used Responsive Web Design templates to meet cutting-edge technology requirements</li>
                <li style={myStyle}>Developed SPA using ReactJS to utilize the HTML5 DOM features and update elements that are modified in the webpage.</li>

            </ul>
        </div>
      </WorkTab>
      <WorkTab value={value} index={3} className="tab-content">
      <h2>Web Designer & Devloper</h2>
        <div className="flex duration">
            <p> Dec 2017 - Nov 2019</p>
            <p> Pune</p>
        </div>
        <div>
            <ul>
                <li style={myStyle}>Implementing a Desktop-first approach to existing websites and Conducting A/B testing to identify bugs and UI improvements.</li>
                <li style={myStyle}>Developed and Designed E-commerce sites using CMS</li>
                <li style={myStyle}>Creating modular, responsive templates using modern CSS3 techniques and JavaScript Libraries.</li>
                <li style={myStyle}>Deliver engaging user experience through optimization of images, code, and cross-browser compatibility, increasing Time on Page by +60 seconds for +10 websites</li>
                <li style={myStyle}>Ensure efficient web development by supporting designers and app developers while resolving website performance issues</li>

            </ul>
        </div>
      </WorkTab>
      <WorkTab value={value} index={4} className="tab-content">
      <h2>Web Designer</h2>
        <div className="flex duration">
            <p> Nov 2016 - Nov 2017</p>
            <p> Pune</p>
        </div>
        <div>
            <ul>
                <li style={myStyle}>Delivered responsive, cross-browser compatible and accessibility compliant websites, achieving 19% faster load time than the industry average.</li>
                <li style={myStyle}>Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3.</li>
                <li style={myStyle}>Automated image optimization, using minified js and css, which reduced page load times by up to 30%.</li>

            </ul>
        </div>
      </WorkTab>
        </Box>
       </div>
     </div>
    </div>
  );
}
