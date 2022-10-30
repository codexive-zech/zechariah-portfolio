import React from "react";
import profileImg from "../images/profile-image.jpg";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import resume from "../asset/ZechariahResume.pdf";

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
            <h4>
              I am a Frontend Engineer and Digital Marketer currently based in
              Lagos, Nigeria. I enjoy solving users' problems and turning
              designs into user friendly applications
            </h4>
            <Link to={resume} className="hire-btn">
              Hire Me
            </Link>
            {/* <!-- Sidebar Social Icon --> */}
            <ul className="social-icons hero-icons white">
              <SocialLinks />
            </ul>
          </article>
          {/* <!-- Hero Img --> */}
          <article className="hero-img">
            <img src={profileImg} className="hero-photo" alt="" />
          </article>
        </div>
      </header>
      {/* <!-- end of header --> */}
    </>
  );
};

export default Hero;
