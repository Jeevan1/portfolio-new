import React from "react";
import { about, interest } from "../data";

function About() {
  return (
    <div className="about__us section" id="about">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-4">
            <div className="left__image" data-aos="fade-right">
              <img src="./assets/images/about/about.png" alt="about img" />
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="right__services">
              <div class="section__heading">
                <h2>About Me</h2>
                <p>
                  Passionate self-taught developer with four months of
                  internship experience, dedicated to crafting visually
                  appealing and functional user interfaces. Seeking
                  opportunities to apply my front-end skills in a dynamic
                  organization, with a focus on innovative solutions and
                  continuous learning.
                </p>
              </div>
              <div className="about__detail">
                <div className="contact ">
                  {about.map((item, index) => (
                    <div key={index} className="d-flex justify-content-center my-1 me-3 p-1">
                      <div className="icon">
                        <i className={`fa ${item.icon}`}></i>
                      </div>
                    </div>
                    // <div key={index} className="col-lg-12 my-1">
                    //   <div className="row">
                    //     <div className="left col-2">
                    //       <i className={`fa ${item.icon}`}></i>
                    //       <span className="ps-2 pe-3">{item.title}</span>
                    //     </div>
                    //     <div className="right col-10">
                    //       <span className="ps-3">{item.detail}</span>
                    //     </div>
                    //   </div>
                    // </div>
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
