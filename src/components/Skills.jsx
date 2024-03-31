import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <div id="skill" className="our__skills section">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-6">
            <div className="left__image" data-aos="fade-right">
              <img
                src="./assets/images/skills/skills-left.png"
                alt="about img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="right__skill d-flex flex-column"
              data-aos="fade-left"
            >
              <div className="section__heading">
                <h3>
                  Core <span>Skills</span> &amp; <span>Tech.</span>
                </h3>
                <p>
                  This section provides an overview of my core competencies and
                  proficiency in relevant technologies, demonstrating my
                  expertise and capabilities in various aspects of software
                  development.
                </p>
              </div>
              <div className="progress__section">
                {skills.map((skills, index) => (
                  <div className="progress__bar" key={skills.id}>
                    <h4>{skills.title}</h4>
                    <span>{skills.percentage}%</span>
                    <div
                      className="filled__bar"
                      style={{ width: `${skills.percentage}%` }}
                    ></div>
                    <div className="full__bar"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
