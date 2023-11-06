import React from 'react'
import styled from 'styled-components';
import './projects.scss';


const Project = (props) => {
    const { img, disc, href, isGithub, name } = props.item;
    return (
        <Container className='project'>

            <img src={img} alt="project" />
            <div className="disc">
                <h4 className='cardTitle'>{name}</h4>
                <p className='cardText'>{disc}
                    <br />
                    {href !== undefined && (
                        <a className='linkText' target='_blank' rel='noreferrer' href={href}>{isGithub === true ? "View On Github" : "View Live"}</a>
                    )}
                </p>
            </div>
        </Container >
    )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -15rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.600), rgba(0,0,0, 0.90));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

`