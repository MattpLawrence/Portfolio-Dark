import React from 'react';
import './skills.scss';
import styled from "styled-components";
import { Slide } from 'react-awesome-reveal';
import { useBreakpoint } from '../breakpoints';

export default function Skills() {

    const currentBreakpoint = useBreakpoint();

    return (
        <Container id="skills">
            <h1>A Few Of My <span className="green">Skills</span></h1>
            <div className="skillsContainer">
                <div className="startContainer">
                    <h3>Technical <span className="green">Skills</span></h3>
                    <Slide direction={(currentBreakpoint === 'xSmall' || currentBreakpoint === 'small') ? "left" : "right"} triggerOnce cascade damping={.3}>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Typescript</h4>
                            <div className="skillBar" id='skillBarTS'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Angular</h4>
                            <div className="skillBar" id='skillBarAngular'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">SCSS</h4>
                            <div className="skillBar" id='skillBarScss'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">React</h4>
                            <div className="skillBar" id='skillBarReact'></div>
                        </div>

                        <div className="skillContainer">
                            <h4 className="skillLabel">HTML</h4>
                            <div className="skillBar" id='skillBarHtml'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">C#</h4>
                            <div className="skillBar" id='skillBarC'></div>
                        </div>
                    </Slide>
                </div>
                <div className="endContainer">
                    <h3>Professional <span className="green">Skills</span></h3>
                    <Slide direction="left" triggerOnce cascade damping={.3}>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Expectation Management</h4>
                            <div className="skillBar" id='skillBarEM'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Client Alignment</h4>
                            <div className="skillBar" id='skillBarCA'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Application Demo</h4>
                            <div className="skillBar" id='skillBarAD'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Documentation</h4>
                            <div className="skillBar" id='skillBarD'></div>
                        </div>

                        <div className="skillContainer">
                            <h4 className="skillLabel">Work Instructions</h4>
                            <div className="skillBar" id='skillBarWE'></div>
                        </div>
                        <div className="skillContainer">
                            <h4 className="skillLabel">Public Speaking</h4>
                            <div className="skillBar" id='skillBarPS'></div>
                        </div>
                    </Slide>
                </div>
            </div>
        </Container>
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