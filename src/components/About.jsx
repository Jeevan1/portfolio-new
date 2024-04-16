import React from "react";
import { about, interest } from "../data";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <div className="about__us section" style={{backgroundImage: `url('./assets/images/about/about-bg.png')`}} id="about">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-4">
            <div className="left__image" data-aos="fade-right">
              <img src="./assets/images/about/about.png" alt="about img" />
            </div>
          </div>
          <div className="col-lg-8 " data-aos="fade-right">
            <div className="right__services" >
              
              <div class="section__heading">
                <h2>About Me</h2>
                <p>
                Self-taught developer with internship experience, specializing in front-end development. Committed to creating visually stunning and functional user interfaces. Seeking opportunities for growth and innovation in a dynamic environment.
                </p>
              </div>
              <div className="about__detail">
                <div className="contact ">
                  {about.map((item, index) => (
                    <div key={index} className="d-flex justify-content-center my-1 me-3 p-1">
                      <a href={item.link} target="_self" className="icon">
                        <i className={`fa ${item.icon}`}></i>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="interest">
                  <h5>My Interests</h5>
                  <div className="row flex-wrap">
                    {interest.map((item, index) => (
                      <div className="col d-flex align-items-center">
                        <i className={`fa ${item.icon}`}></i>
                        <span className="p-2">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
