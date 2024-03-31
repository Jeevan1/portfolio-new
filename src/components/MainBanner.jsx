import React from 'react'

function MainBanner() {
  return (
    <div className="main__banner section" id="top">
    <div className="container">
        <div className="row align-items-center ">
            <div className="col-lg-6">
                <div className="left__content " data-aos="fade-right">
                    <h5>Hello &amp; Welcome</h5>
                    <h2>I am <span>Jeevan Shrestha</span> &amp; <span>Web </span>Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquam labore eos odio
                        quidem voluptas eius quam, unde est excepturi by <a href="#">JDev</a></p>
                    <form action="">
                        <div className="form__input">
                            <input type="text" placeholder="Project Description..."/>
                            <button type="button" className="">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="right__content " data-aos="fade-left">
                    <img src="./assets/images/banner/banner-right-image.png" alt="banner__img"/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MainBanner;