import React from "react";
import './service.scss'
import CodeIcon from '@mui/icons-material/Code';
import { FiCodesandbox } from "react-icons/fi";
import EngineeringIcon from '@mui/icons-material/Engineering';
import styled from "styled-components";
import Card from "./Card";

const Services = () => {



  return (
    <Container id="service">
      <h4>
        My <span className="green">specialties</span>
      </h4>
      <h1>What I Do</h1>
      <Cards id="cardContainer">
        <Card
          className="card"
          Icon={EngineeringIcon}
          title={"Component Library Engineer"}
          disc={`I build component libraries with Angular and React to help facilitate the development of large scale applications.`}
        />
        <Card
          className="card"
          Icon={FiCodesandbox}
          title={"Front End Developer"}
          disc={`With extensive experience in React and Angular with Scss, I am ready to help you build your next fully responsive application. `}
        />
        <Card
          className="card"
          Icon={CodeIcon}
          title={"Full Stack Developer"}
          disc={`From the front end to the back end, I can help you build your next application. I have experience with .Net, C#, Node.js, and Express.`}
        />
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
