import React from "react";
import { Link } from "react-router-dom";

import aboutPersonImg from "../images/about-img.jpeg";

const HomeAbout = () => {
  return (
    <section class="section about">
      <div class="section-center about-center">
        {/* About Img */}
        <article class="about-img">
          <img src={aboutPersonImg} class="hero-photo" alt="" />
        </article>
        {/* About Info */}
        <article class="about-info">
          {/* Section Title */}
          <h2 class="section-title about-title">About</h2>
          <div class="underline about-underline"></div>
          {/* End of Section Title */}
          <p>
            Hello! My name is Zechariah and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            while i was still in school, I started wondering how on website and
            apps where built, So i decided to give it a try and at the i got
            hooked to it, turns out curiosity for how the web works gave a light
            to my life.
          </p>
          <p>
            I am an inventive and focused Frontend Engineer. I've used my
            passion for solving problems and assisting people and businesses in
            accomplishing their objectives by making users' lives better through
            bringing designs to life through the development process with my
            code. I firmly believe in taking a collaborative approach to each
            project. I enjoy solving users' problems, and I love working with a
            team to achieve a common goal.
          </p>
          <Link to="/contact" class="btn">
            Hire Me
          </Link>
        </article>
      </div>
    </section>
  );
};

export default HomeAbout;
