import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    name: "The Kitten Rescue Project",
    img: "images/projects/tkrpSmall.png",
    disc: "The Kitten Rescue Project is a non-profit organization that rescues and rehomes cats and kittens in the Atlanta. I built this website using Angular, Express, and Node.",
    href: "https://thekittenproject.org/landing-page",
    isGithub: false
  },
  {
    name: "Improving Atlanta Home Page",
    img: "images/projects/iaSmall.png",
    disc: "I led the front end development of this SEO optimized webpage for an Atlanta based consulating company. We built this website with React, Next, and Material UI.",
    href: "https://improvingatlanta.com/",
    isGithub: false
  },
  {
    name: "Checkout Application",
    img: "images/projects/checkoutSmall.png",
    disc: "This is a large scale checkout application that we built for a client. I led the front end development of this application using Angular.",
    isGithub: false
  },
  {
    name: "Chat Application",
    img: "images/projects/gamerGabbleMin.png",
    disc: "This application was designed to connect gamers with each other and allow for seamless conversations. We built this chat application using React, Express, Node, and Socket.io.",
    href: "https://github.com/MattpLawrence/Game-Chat",
    isGithub: true,
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`