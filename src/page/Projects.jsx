import React from "react";
import { FaCode } from "react-icons/fa";
import projects from "../utils/project";

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
          {/* */}
          {projects.map((project) => {
            const { id, url, name, image, description } = project;
            return (
              <a href={url} key={id}>
                <article className="single-project">
                  <div className="project-container project-link">
                    {/* Img  */}
                    <img src={image} alt="" />
                    <div className="project-icon">
                      <FaCode />
                    </div>
                  </div>

                  <div className="project-details">
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                </article>
              </a>
            );
          })}
          {/*  */}
        </div>
      </section>

      {/* End of Project Header */}
    </>
  );
};

export default Projects;
