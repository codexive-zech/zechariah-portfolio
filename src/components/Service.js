import React from "react";
import services from "../utils/services";

const Service = () => {
  return (
    <section class="section bg-grey">
      {/*  Section Title */}
      <h2 class="section-title">Service</h2>
      <div class="underline"></div>
      {/* End of Section Title */}
      <div class="services-center section-center">
        {/* Single Service */}
        {services.map((service) => {
          const { id, title, icon, text } = service;
          return (
            <article class="service" key={id}>
              <span className="service-icon">{icon}</span>
              <h4>{title}</h4>
              <div class="underline"></div>
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
