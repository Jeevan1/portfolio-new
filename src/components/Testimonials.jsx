import React from "react";
import { testimonials } from "../data";

function Testimonials() {
  return (
    <div className="our__portfolio section" id="portfolio">
      <div className="container">
        <div className="row justify-content-center align-i">
          <div className="col-lg-6">
            <div className="section__heading text-center" data-aos="zoom-in">
              <h3>
                See What Our Agency <span>Offers</span> Service &amp; What We{" "}
                <span>Provide</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {testimonials.map((testimonials, i) => (
            <div className="col-lg-3 col-sm-6" key={i}>
              <a href="#" className="">
                <div className="portfolio__item" data-aos="fade-up">
                  <div className="portfolio__content hidden__content">
                    <h4>
                      {testimonials.name} <br />
                      <small>({testimonials.designation})</small>
                    </h4>
                    <span>{testimonials.content}</span>
                  </div>
                  <div className="portfolio__image showed__content">
                    <img src={testimonials.image} alt={testimonials.name} />
                    {/* <p>{testimonials.name}</p> */}
                  </div>
                </div>
              </a>
            </div>
          ))}
          {/* <div className="col-lg-3 col-sm-6">
                <a href="#" className="" >
                    <div className="portfolio__item" data-aos="fade-up">
                        <div className="portfolio__content hidden__content">
                            <h4>Web Design</h4>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        </div>
                        <div className="portfolio__image showed__content">
                            <img src="./assets/images/portfolio-image.png" alt="portfolio image"/>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6">
                <a href="#" className="" >
                    <div className="portfolio__item" data-aos="fade-up">
                        <div className="portfolio__content hidden__content">
                            <h4>Web Design</h4>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        </div>
                        <div className="portfolio__image showed__content">
                            <img src="./assets/images/portfolio-image.png" alt="portfolio image"/>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6">
                <a href="#" className="" >
                    <div className="portfolio__item" data-aos="fade-up">
                        <div className="portfolio__content hidden__content">
                            <h4>Web Design</h4>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        </div>
                        <div className="portfolio__image showed__content">
                            <img src="./assets/images/portfolio-image.png" alt="portfolio image"/>
                        </div>
                    </div>
                </a>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
