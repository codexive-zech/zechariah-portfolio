import React from "react";
import services from "../utils/services";

const Service = () => {
  return (
    <section className="section bg-grey">
      {/*  Section Title */}
      <h2 className="section-title">Service</h2>
      <div className="underline"></div>
      {/* End of Section Title */}
      <div className="services-center section-center">
        {/* Single Service */}
        {services.map((service) => {
          const { id, title, icon, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">{icon}</span>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
        {/* End of Single Service */}
      </div>
    </section>
  );
};

export default Service;
