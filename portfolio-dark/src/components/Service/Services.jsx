import React from "react";
import './service.scss'
import CodeIcon from '@mui/icons-material/Code';
import { FiCodesandbox } from "react-icons/fi";
import EngineeringIcon from '@mui/icons-material/Engineering';
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { useBreakpoint } from '../breakpoints';

const Services = () => {

  const currentBreakpoint = useBreakpoint();

  return (
    <Container id="service">
      <Slide direction="down" triggerOnce={true}>
        <h4>
          My <span className="green">specialties</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left" triggerOnce>
          <Card
            Icon={EngineeringIcon}
            title={"Component Library Engineer"}
            disc={`I build component libraries with Angular and React to help facilitate the development of large scale applications.`}
          />
        </Slide>
        <Slide direction={(currentBreakpoint === 'xSmall' || currentBreakpoint === 'small') ? "right" : "up"} triggerOnce>
          <Card
            Icon={FiCodesandbox}
            title={"Front End Developer"}
            disc={`With extensive experience in React and Angular with Scss, I am ready to help you build your next fully responsive application. `}
          />
        </Slide>
        <Slide direction={(currentBreakpoint === 'xSmall' || currentBreakpoint === 'small') ? "left" : "right"} triggerOnce>
          <Card
            Icon={CodeIcon}
            title={"Full Stack Developer"}
            disc={`From the front end to the back end, I can help you build your next application. I have experience with Node.js, Express, and .Net`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

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
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
