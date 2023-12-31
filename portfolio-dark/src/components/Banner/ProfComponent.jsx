import React from "react";
import styled from "styled-components";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Slide } from "react-awesome-reveal";
import './banner.scss';

const ProfComponent = () => {

  function scrollToSection(id) {
    let ref = document.getElementById(id);
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: 'start' });
    }
  }

  return (
    <Container id="home">
      <Slide direction="left" triggerOnce>
        <Texts>
          <h1 className="green">Matt Lawrence</h1>
          <h3>Developer And Component Library Engineer</h3>
          <p>
            Hi there, I am a full stack developer and component library engineer.
            My main professional focus is on front end development in modern javascript frameworks like React and Angular.
            I also have experience in backend development with C#, .Net, Nodejs and Express.
            I specialize in the development and implementation of component libraries to help facilitate the development of large scale applications.
          </p>
          <button onClick={() => scrollToSection('service')}>See What I Can Do</button>
          <Social className="socialIconRow">
            <p>Check out my</p>
            <div className="social-icons">
              <span className="socialIcon">
                <a href="mailto:MattPhLawrence@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                  <EmailIcon />
                </a>
              </span>
              <span className="socialIcon">
                <a href="https://www.linkedin.com/in/mattplawrence/" target="_blank" rel="noreferrer" aria-label="github">
                  <LinkedInIcon />
                </a>
              </span>
              <span className="socialIcon">
                <a href="https://github.com/MattpLawrence" target="_blank" rel="noreferrer" aria-label="Linkedin">
                  <GitHubIcon />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right" triggerOnce>
        <Profile id="avatarContainer">
          <div className="pentagon"></div>
          <img
            id="avatar"
            src="/images/banner/meSecondarySmallCrop.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 4rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
    font-family: 'Nunito', sans-serif;
  }
  h1 {
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    font-family: 'Nunito', sans-serif;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    :hover {
      background-color: #048b6e;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
    }

    a {
      color: #fff;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;



  }

`;
