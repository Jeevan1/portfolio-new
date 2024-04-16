import React from "react";
import { education, experience } from "../data";

function Background() {
  const Title = () => {
    return (
      <>
         <span>Educaction</span> &amp; <span>Experience</span>
      </>
    );
  };
  return (
    <div class="background section" id="education">
      <div class="container">
        <div class="row justify-content-center align-i">
          <div class="col-lg-6">
            <div class="section__heading text-center sticky" data-aos="zoom-in">
              <h3>
                <span>Education</span> &amp; <span>Experience</span>
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-6">
            <div className="education">
              <div
                class="section__heading education__heading"
                data-aos="zoom-in"
              >
                <h4>Education</h4>
              </div>
              <div className="background__items">
                {education.map((education, i) => (
                  <div className="background__item" data-aos="fade-up">
                    <div className="shadow px-4 py-3 ms-5" key={i}>
                      <p>{education.durations}</p>
                      <h5>{education.title} (<small>{education.degree}</small>)</h5>
                      
                      <span>{education.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="experience">
              <div
                class="section__heading experience__heading"
                data-aos="zoom-in"
              >
                <h4>Experience</h4>
              </div>
              <div className="background__items">
                {experience.map((experience, i) => (
                  <div className="background__item" data-aos="fade-up">
                    <div className=" shadow px-4 py-3 ms-5" key={i}>
                      <p>{experience.durations}</p>
                      <h5>{experience.title} (<small>{experience.degree}</small>)</h5>
                      <span>{experience.description}</span>
                    </div>
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

export default Background;
