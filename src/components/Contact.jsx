import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact__us section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="left__content" data-aos="fade-right">
              <div className="section__heading">
                <h3>Subscribe to Our Newsletter!</h3>
                <p>Subscribe to our newsletter and stay updated.</p>
              </div>
             <div className="left__image">
             <img src="./assets/images/newsletter/newsletter.png" alt="newsletter" />
             </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right__form" data-aos="fade-left">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form__input">
                      <input type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form__input">
                      <input type="text" placeholder="Surname" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form__input">
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form__input">
                      <textarea
                        name="message"
                        id="msg"
                        cols=""
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form__input">
                      <button className="cyan__button">
                        <a href="#">Send Message</a>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
