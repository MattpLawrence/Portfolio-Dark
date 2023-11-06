import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

  return (
    <Container id="contact">
      <Profile>
        <h1>Contact</h1>
        <div className="address">
        </div>
        <div className="links">
          <h1>Contact me directly:</h1>

          <div>
            <span>
              <HiOutlineMailOpen />
            </span>
            <a href="mailto:mattphlawrence@gmail.com">mattphlawrence@gmail.com</a>
          </div>
        </div>
        <div className="profiles">
          <h1>Check my profiles</h1>
          <Social className="socialIconRow">
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
        </div>
      </Profile>
    </Container>
  );
};

export default Footer;

const Social = styled.div`

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

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
