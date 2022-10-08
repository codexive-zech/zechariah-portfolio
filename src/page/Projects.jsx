import React from "react";
import projectOne from "../images/project-1.jpeg";
import projectTwo from "../images/project-4.jpeg";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      {/*  Project Header   */}
      <header className="projects-hero">
        {/*  Section Title  */}
        <div className="section-title">
          <h2>my projects</h2>
          <div className="underline"></div>
        </div>
      </header>
      <section className="section">
        <div className="section-center projects-page-center">
          <Link to="hf.com">
            <article href="kdokuj.com" className="single-project">
              <div className="project-container project-link">
                {/* Img  */}
                <img src={projectOne} alt="" />
                <div className="project-icon">
                  <FaCode />
                </div>
              </div>
              <div className="project-details">
                <h4>Project name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis magnam amet reprehenderit praesentium et optio
                  recusandae impedit. Culpa, distinctio labore. Enim velit sequi
                  reiciendis consequatur?
                </p>
              </div>
            </article>
          </Link>
          {/* kdoliksl */}
          <a href="goouds.com">
            <article className="single-project">
              <div className="project-container project-link">
                {/* Img  */}
                <img src={projectOne} alt="" />
                <div className="project-icon">
                  <FaCode />
                </div>
              </div>

              <div className="project-details">
                <h4>Project name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis magnam amet reprehenderit praesentium et optio
                  recusandae impedit. Culpa, distinctio labore. Enim velit sequi
                  reiciendis consequatur?
                </p>
              </div>
            </article>
          </a>
        </div>
      </section>

      {/* End of Project Header */}
    </>
  );
};

export default Projects;
