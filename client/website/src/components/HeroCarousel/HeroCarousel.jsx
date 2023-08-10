import React from "react";
import "./HeroCarousel.css";
import hero__banner from "../../assets/hero/hero__banner.png";
import hero__banner__two from "../../assets/hero/hero__banner_two.png";
import hero__banner__three from "../../assets/hero/hero__banner_three.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";



const HeroCarousel = () => {
  return (
    <>
      <div className="hercarousel__wrapper">
        <div className="hero_carousel">
          <div
            id="template-mo-zay-hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#template-mo-zay-hero-carousel"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li
                data-bs-target="#template-mo-zay-hero-carousel"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#template-mo-zay-hero-carousel"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row p-lg-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-2 hero__img order-lg-last">
                      <img className="img-fluid"  src={hero__banner__two} alt="hero-banner-one" />
                    </div>
                    <div className="col-lg-6 order-1 mb-0 d-flex align-items-end">
                      <div className="text-align-left align-self-end">
                        <p className="hero__top__paragraph" style={{marginTop:"30px"}}>
                        osmossion cares
                        </p>
                        <h1 className="hero__main__heading">
                        Expert Dialysis Care for Better Living
                        </h1>
                        <p className="hero__main__paragraph">
                        At osmossion, we believe in excellence when it comes to dialysis care. Our experienced healthcare professionals are dedicated to delivering the highest quality treatments and services, tailored to your specific requirements. We understand the challenges of living with kidney disease, and our comprehensive approach ensures that you receive expert care, personalized attention, and the support you need for a better and healthier life.
                        </p>
                        <div className="hero__buttons">
                          <NavLink to="/our-services" className="hero__button">
                            Check Our Services 
                            <span className="ms-2">
                              <MdOutlineKeyboardDoubleArrowRight />
                            </span> 
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row p-lg-5">
                    <div className="mx-auto col-md-8 hero__img order-2 col-lg-6 order-lg-last">
                      <img className="img-fluid"src={hero__banner} alt="hero-banner-two" />
                    </div>
                    <div className="col-lg-6 order-1 mb-0 d-flex align-items-center">
                      <div className="text-align-left align-self-center">
                        <p className="hero__top__paragraph">
                        Osmossion provides
                        </p>
                        <h1 className="hero__main__heading">
                        Best Healthcare For Your Family
                        </h1>
                        <p className="hero__main__paragraph">
                        We know that choosing the right dialysis treatment can be overwhelming. That's why we are here to provide you with comprehensive solutions tailored to your unique needs. Our dedicated team is committed to delivering the highest standard of care and support, ensuring your well-being and quality of life. Trust osmossion for advanced dialysis services that prioritize your health and comfort.
                        </p>
                        <div className="hero__buttons">
                          <NavLink to="/our-services" className="hero__button">
                            Check Our Services 
                            <span className="ms-2">
                              <MdOutlineKeyboardDoubleArrowRight />
                            </span> 
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row p-lg-5">
                    <div className="mx-auto order-2 col-md-8 hero__img col-lg-6 order-lg-last">
                      <img className="img-fluid" src={hero__banner__three} alt="" />
                    </div>
                    <div className="col-lg-6 order-1 mb-0 d-flex align-items-center">
                      <div className="text-align-left align-self-center">
                        <p className="hero__top__paragraph">
                        osmossion excellence
                        </p>
                        <h1 className="hero__main__heading">
                        Your Path to Better Health
                        </h1>
                        <p className="hero__main__paragraph">
                          We understand that finding the right dialysis provider
                          can be a daunting task, which is why we strive to
                          provide you with the best care and service possible.
                          We understand that living with kidney disease can be
                          challenging, which is why we're committed to providing
                          the highest level of care and support to help you lead
                          a healthy, fulfilling life.
                        </p>
                        <div className="hero__buttons">
                          <NavLink to="/our-services" className="hero__button">
                            Check Our Services 
                            <span className="ms-2">
                              <MdOutlineKeyboardDoubleArrowRight />
                            </span> 
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev text-decoration-none w-auto ps-3"
              href="#template-mo-zay-hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span className="prev__next__icons">
                <MdKeyboardArrowLeft />
              </span>
            </a>
            <a
              className="carousel-control-next text-decoration-none w-auto pe-3"
              href="#template-mo-zay-hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span className="prev__next__icons">
                <MdKeyboardArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
