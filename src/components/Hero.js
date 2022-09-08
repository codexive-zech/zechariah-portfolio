import React from "react";
import heroImg from "../images/hero-img.jpeg";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <>
      {/* <!-- header --> */}
      <header className="hero">
        <div className="section-center hero-center">
          {/* <!-- Hero info --> */}
          <article className="hero-info">
            <div className="underline"></div>
            <h1>Hi, I'm Zechariah Hounwanou</h1>
            <h4>Freelance Web Developer and UI/UX Designer</h4>
            <a href="contact.html" className="btn hero-btn">
              Hire Me
            </a>
            {/* <!-- Sidebar Social Icon --> */}
            <ul className="social-icons hero-icons">
              <SocialLinks />
            </ul>
          </article>
          {/* <!-- Hero Img --> */}
          <article className="hero-img">
            <img src={heroImg} className="hero-photo" alt="" />
          </article>
        </div>
      </header>
      {/* <!-- end of header --> */}
    </>
  );
};

export default Hero;
