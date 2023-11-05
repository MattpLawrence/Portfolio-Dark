import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';

const Projects = () => {
    return (
        <Container id='project'>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>Here are a few of my recent projects, from a website for a local animal rescue, to nationally utilized enterprise level solutions.</p>
            <SliderComp />
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

