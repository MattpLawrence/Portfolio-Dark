import React from 'react';
import './resume.scss';
import styled from "styled-components";
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useBreakpoint } from '../_common/breakpoints';

export default function Resume() {

  const currentBreakpoint = useBreakpoint();

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Matthew_Lawrence_Resume_12-23.pdf'; // Path to your PDF file
    link.download = 'MPL_Resume_2023.pdf'; // Name for the downloaded file
    link.click(); // Simulate click on the link to initiate the download
  };

  const handlePrint = () => {
    const pdfURL = process.env.PUBLIC_URL + '/Matthew_Lawrence_Resume_12-23.pdf'; // Path to your PDF file in the public folder

    // Open the PDF in a new browser tab/window
    const newWindow = window.open(pdfURL, '_blank');

    // Check if the window has been opened
    if (newWindow !== null) {
      // Once the PDF is loaded in the new window, trigger the print functionality
      newWindow.onload = () => {
        newWindow.print();
      };
    } else {
      // In case the window couldn't be opened
      alert('Pop-up blocked. Please allow pop-ups for this site to print the document.');
    }
  };


  return (
    <Container id="resume">
      <h1>Check Out My <span className="green">Resume</span></h1>
      <div className="resumeContainer">
        <div className="topContainer">
          <div className="headerContainer">
            <h1 className="name">Matthew Lawrence</h1>
            <div className="subHeader">Full Stack Developer/ Front End Developer/ Component Library Engineer</div>
            {(currentBreakpoint === 'xSmall' || currentBreakpoint === 'small') ? (
              <React.Fragment>
                <div className="contactRow">
                  <span className='bold'>Portfolio: </span>
                  <a href="https://mpl-portfolio-2023.netlify.app/" target='_blank' rel='noreferrer'>View Portfolio</a>
                </div>
                <div className="contactRow">
                  <span className='bold'>LinkedIn: </span>
                  <a href="https://www.linkedin.com/in/mattplawrence" target='_blank' rel='noreferrer'>View Linkedin</a>
                </div>
                <div className="contactRow">
                  <span className='bold'>Github: </span>
                  <a href="https://github.com/MattpLawrence" target='_blank' rel='noreferrer'>View Github</a>
                </div>
              </React.Fragment>
            ) :
              (
                <React.Fragment>
                  <div className="contactRow">
                    <span className='bold'>Portfolio: </span>
                    <a href="https://mpl-portfolio-2023.netlify.app/" target='_blank' rel='noreferrer'>https://mpl-portfolio-2023.netlify.app/</a>
                  </div>
                  <div className="contactRow">
                    <span className='bold'>LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/mattplawrence" target='_blank' rel='noreferrer'>https://www.linkedin.com/in/mattplawrence</a>
                  </div>
                  <div className="contactRow">
                    <span className='bold'>Github: </span>
                    <a href="https://github.com/MattpLawrence" target='_blank' rel='noreferrer'>https://github.com/MattpLawrence</a>
                  </div>
                </React.Fragment>
              )}

          </div>
          <div className="downloadContainer">
            <Tooltip title="Download">
              <IconButton aria-label="delete" onClick={handleDownload}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Print">
              <IconButton aria-label="Print" onClick={handlePrint}>
                <PrintIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="mainContents">
          <div className="startContainer">
            <div className="experienceContainer">
              <h2 className="sectionTitle">EXPERIENCE</h2>
              <div className="experienceSection">
                <h3 className="experienceTitle">Improving,<span className='lightText'> Atlanta GA —</span><span className='lightText italic'>Consultant</span></h3>
                <div className="dateRow">March 2022 - PRESENT</div>
                <p>Front-end developer specializing in TypeScript, SCSS, and modern JavaScript frameworks. Mentored team members in SCSS styling and layout as well as TypeScript logic and function.</p>
                <h4>Background Check Application:</h4>
                <p>Experienced .NET C# developer proficient in maintaining and enhancing legacy projects, demonstrating expertise in navigating and optimizing existing codebases as well as creating new features to synergize with the existing functionality. </p>
                <h4>Internal Website:</h4>
                <p>Led the development of our company's new SEO-oriented website. This React / Next TypeScript app was developed from the ground up to be a showcase of what our company could do.</p>
                <h4>Checkout Application:</h4>
                <p>Led the development of a large-scale public-facing front-end application using TypeScript and Angular with Material styling. </p>
                <h4>Component Library and NPM package:</h4>
                <p>Designed and developed a full stack,  internal Angular component library allowing team members to efficiently implement reusable components from a central location.</p>
              </div>
              <div className="experienceSection">
                <h3 className="experienceTitle">Voith Paper,<span className='lightText'> Austell GA —</span><span className='lightText italic'>Mechanical Engineer Co-Op</span></h3>
                <div className="dateRow">December 2019 - December 2021</div>
                <p>Utilized Microsoft Access to create project Databases. Learned and used VBA and SQL to build databases for inventory tracking, safety training, job education, and work instruction. </p>
              </div>
              <div className="experienceSection">
                <h3 className="experienceTitle">Fitness Together,<span className='lightText'> Atlanta GA —</span><span className='lightText italic'>Personal Trainer</span></h3>
                <div className="dateRow">May 2017 - December 2019</div>
              </div>
            </div>
            <div className="interestsContainer">
              <h2 className="sectionTitle">PROJECTS AND INTERESTS</h2>
              <div className="experienceSection">
                <h3 className="experienceTitle">Animal Rescue,<span className='lightText'> Foster and Volunteer</span></h3>
                <div className="dateRow">September 20 - PRESENT</div>
                <p>Animal welfare advocate, foster, and co-founder for The Kitten Rescue Project, a local non-profit rescue.</p>
                <h4>Rescue's Website:</h4>
                <p>Developed the home website for TKRP, a 501c3 non-profit specializing in neonatal kittens. <a href="https://thekittenproject.org/" rel='noreferrer' target='_blank'>https://thekittenproject.org/</a></p>
              </div>
            </div>
          </div>
          <div className="endContainer">
            <div className="educationContainer">
              <h2 className="sectionTitle">PROJECTS AND INTERESTS</h2>
              <div className="experienceSection">
                <h3 className="experienceTitle">Georgia Tech,<span className='lightText'> Atlanta Ga —</span><span className='lightText italic'>MERN stack certification</span></h3>
                <div className="dateRow">December 2021 - March 2022</div>
                <p>Used Node.js and Express.js to create a server and establish routes of RESTful APIs. MySQL and Sequelize were used to store information in a database</p>
              </div>
              <div className="experienceSection">
                <h3 className="experienceTitle">Kennesaw State,<span className='lightText'> Atlanta Ga —</span><span className='lightText italic'>Mechanical Engineering</span></h3>
                <div className="dateRow">2017 - 2021</div>
              </div>
            </div>
            <div className="skillsContainer">
              <h2 className="sectionTitle">TECHNICAL SKILLS</h2>
              <p className='skills'>Typescript, Angular, React, C#, .NET, HTML, CSS, SCSS, Javascript, MERN stack, NPM, GIT, Azure, Agile Scrum</p>
            </div>
            <div className="skillsContainer">
              <h2 className="sectionTitle">PROFESSIONAL SKILLS</h2>
              <p className='skills'>Expectation Management, Public Speaking, Application Demo, Active Listening, Documentation, Work Instructions</p>
            </div>
          </div>
        </div>
      </div>
    </Container >
  )
}

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;