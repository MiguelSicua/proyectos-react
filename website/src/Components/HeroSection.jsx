import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./componentStyles/HSectionStyles";
import {Button} from "../Styles/Button";
import { useGlobalContext } from "../context";


const HeroSection = () => {
  const {name, image} = useGlobalContext();

    return (
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">
              Lorem, I'm {name}. ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              fugiat! Recusandae labore ratione ipsa veniam eum temporibus? Cum
              omnis totam animi fuga ipsum ab architecto, consequatur distinctio
              maiores libero temporibus.
            </p>
            <Button className="btn hireme-btn">
              <NavLink to="/contact">hire me</NavLink>
            </Button>
          </div>
          
          {/**for image */}
          <div className="section-hero-image">
            <picture>
                <img 
                src={image} 
                alt="hero image" 
                className="hero-img" 
                />
            </picture>
          </div>
        </div>
      </Wrapper>
    );
};
 

export default HeroSection;