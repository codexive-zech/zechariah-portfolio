import React from "react";
import resume from "../asset/ZechariahResume.pdf";
import aboutPersonImg from "../images/second-image.jpeg";

const HomeAbout = () => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        {/* About Img */}
        <article className="about-img">
          <img src={aboutPersonImg} className="hero-photo" alt="" />
        </article>
        {/* About Info */}
        <article className="about-info">
          {/* Section Title */}
          <h2 className="section-title about-title">About</h2>
          <div className="underline about-underline"></div>
          {/* End of Section Title */}
          <p>
            Hello! My name is Zechariah and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            while i was still in school, I started wondering how website and
            apps where built, So i decided to give it a try and at the i got
            hooked to it, turns out curiosity for how the web works gave a light
            to my life.
          </p>
          <p>
            I am an inventive, Result-driven and focused Frontend Engineer with
            over two years of experience in software development and
            programming. I am skilled in designing, developing and marketing
            multiple web-based applications incorporating a range of
            technologies. I've used my passion for solving problems and
            assisting people and businesses in accomplishing their objectives by
            making users' lives better by bringing designs to life through the
            development process with my code. I firmly believe in taking a
            collaborative approach to each project. I enjoy solving users'
            problems, and I love working with a team to achieve a common goal.
          </p>
          <a
            href={resume}
            className="hire-btn"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
        </article>
      </div>
    </section>
  );
};

export default HomeAbout;
