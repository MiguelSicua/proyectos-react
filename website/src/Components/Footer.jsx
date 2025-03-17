import { NavLink } from "react-router-dom";
import { Wrapper } from "./componentStyles/FooterStyles";
import { Button } from "../Styles/Button";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div className="contact-short-btn">
              <NavLink to="/" />
              <Button>Get Started</Button>
              <NavLink />
            </div>
          </div>
      </section>

      {/*FOOTER SECTION*/}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Nutri-Track</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/** 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/**3rd column */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <CiFacebook className="icons" />
              </div>
              <div>
                <CiInstagram className="icons" />
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=Wf7EAA7j57o&list=PLwGdqUZWnOp1UMoSmcAugghzqKYKcJgfQ&index=11" target="_blank">
                <CiYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/**4th column */ }
          <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12387238724</h3>
          </div>
        </div>

        {/**bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} NutriTrack. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
