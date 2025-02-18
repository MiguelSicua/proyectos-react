import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../Styles/Button"


const HeroSection = () => {
    return (
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">NUTRITRACK</h1>
            <p className="hero-para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              fugiat! Recusandae labore ratione ipsa veniam eum temporibus? Cum
              omnis totam animi fuga ipsum ab architecto, consequatur distinctio
              maiores libero temporibus.
            </p>
          </div>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
          </Button>
          {/**for image */}
          <div className="section-hero-image"></div>
            <picture>
                <img src="./images/hero.svg" alt="hero image" className="hero-image" />
            </picture>
        </div>
      </Wrapper>
    );
}
 
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;