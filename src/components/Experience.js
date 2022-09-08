import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleDoubleRight } from "react-icons/fa";
const Experience = () => {
  const { jobs } = useSelector((store) => store.experience);
  const [value, setValue] = useState(0);

  const { date, duties, company, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {/* iterate over the jobs array to return each company */}
          {jobs?.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)} // set the new value state as the index
                className={`job-btn ${index === value && "active-btn"}`} // make active-btn class possible as long as index and value are same
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {/* iterate over the list of duties array to display each of them */}
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Experience;
