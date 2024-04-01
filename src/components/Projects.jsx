import React from "react";

function Projects() {
  return (
    <div id="projects" className=" projects section">
      <div className="container">
        {/* <div className="row stiky" data-aos="fade-down">
          <div className="col-lg-6 col-sm-12 position-relative">
            <div className="section__heading">
              <h3>
                My <span>Projects</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio laborum vero iusto saepe sint obcaecati iste
                reprehenderit libero autem culpa.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section__image">
              <img src="./assets/images/projects/project-bg.png" alt="img" />
            </div>
          </div>
        </div> */}
        <div className="row" >
          <div className="col-lg-6 position-relative">
            <div className="left__content" data-aos="fade-right">
            <div className="section__heading stiky">
              <h3>
                My <span>Projects</span>
              </h3>
              <p>
              A showcase of my diverse projects, all built with React's cutting-edge capabilities. Witness the power of React in action as it brings web applications to life with interactivity and elegance. 
              </p>
            </div>
            <div className="">
              <img src="./assets/images/projects/oneup.png" alt="img" />
              <div className="info">
                <div className="inner__content">
                  {/* <ul className=" ">
                    <li>
                      <i className="fa fa-calendar"></i> 23 May 2023
                    </li>
                    <li>
                      <i className="fa fa-users"></i> 21 May 2022
                    </li>
                    <li>
                      <i className="fa fa-folder"></i> 23 Jan 2020
                    </li>
                  </ul> */}
                  <a href="#">
                    <h4>SEO Agency &amp; Digital Marketing</h4>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium eius soluta pariatur quos nihil recusandae velit
                    earum vel laudantium iure...
                  </p>
                  <div className="links d-flex gap-2 mt-3">
                    <div className="  cyan__button">
                      <a href="#">Watch Live</a>
                    </div>
                    <div className="red__button">
                      <a href="#">Voew Code</a>
                    </div>
                  </div>
                  <div className=" more cyan__button">
                    <a href="#">Discover More</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-6" >
            <div className="section__image" data-aos="fade-up">
              <img src="./assets/images/projects/project-bg.png" alt="img" />
            </div>
            <div className="right__content">
              <ul>
                <li data-aos="fade-up">
                  <div className="top__image border">
                    <a href="#">
                      <img
                        src="./assets/images/projects/farm.png"
                        alt="project"
                      />
                    </a>
                  </div>
                  <div className="bottom__content">
                    <span>
                      <i className=" fa fa-calendar"></i> 23 Feb 2024
                    </span>
                    <a href="#">
                      <h4>New Websites &amp; Backlinks</h4>
                    </a>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum...
                    </p>
                    <div className="links d-flex gap-2 mt-3">
                      <div className="  cyan__button">
                        <a href="#">Watch Live</a>
                      </div>
                      <div className="red__button">
                        <a href="#">Voew Code</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up">
                  <div className="top__image border">
                    <a href="#">
                      <img
                        src="./assets/images/projects/farm.png"
                        alt="project"
                      />
                    </a>
                  </div>
                  <div className="bottom__content">
                    <span>
                      <i className=" fa fa-calendar"></i> 23 Feb 2024
                    </span>
                    <a href="#">
                      <h4>New Websites &amp; Backlinks</h4>
                    </a>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum...
                    </p>
                    <div className="links d-flex gap-2 mt-3">
                      <div className="  cyan__button">
                        <a href="#">Watch Live</a>
                      </div>
                      <div className="red__button">
                        <a href="#">Voew Code</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up">
                  <div className="top__image border">
                    <a href="#">
                      <img
                        src="./assets/images/projects/farm.png"
                        alt="project"
                      />
                    </a>
                  </div>
                  <div className="bottom__content">
                    <span>
                      <i className=" fa fa-calendar"></i> 23 Feb 2024
                    </span>
                    <a href="#">
                      <h4>New Websites &amp; Backlinks</h4>
                    </a>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum...
                    </p>
                    <div className="links d-flex gap-2 mt-3">
                      <div className="  cyan__button">
                        <a href="#">Watch Live</a>
                      </div>
                      <div className="red__button">
                        <a href="#">Voew Code</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
