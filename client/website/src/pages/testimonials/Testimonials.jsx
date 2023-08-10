import React, { Component } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import {BsQuote} from "react-icons/bs"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="testimonials__sliders">
        <div className="container">
             <div className="testimonials__sliders__title">
                <h3>Client Testimonials</h3>
                <p className="text-secondary">What people say about us</p>
             </div>
          <div>
            <Slider ref={(slider) => (this.slider = slider)} {...settings}>
              <div className="testimonials__single__slide">
                <div className="testimonials__single__content">
                  <p>
                    <span className="icon__quotes"> <BsQuote/></span> I received dialysis treatment at Osmossion and was impressed
                    with the top-notch facilities and compassionate staff. They
                    explained everything in detail, answered my questions, and
                    made sure I was comfortable throughout my treatment. highly
                    recommend this hospital to anyone in need of dialysis
                    treatment. Thanks for making a difference in my life.
                  </p>
                </div>
                <div className="testimonials__single__author">
                    <h6>Abhinav Jha</h6>
                </div>
              </div>
              <div className="testimonials__single__slide">
                <div className="testimonials__single__content">
                  <p>
                  <span className="icon__quotes"> <BsQuote/></span>I received dialysis treatment at Osmossion and was impressed
                    with the top-notch facilities and compassionate staff. They
                    explained everything in detail, answered my questions, and
                    made sure I was comfortable throughout my treatment. highly
                    recommend this hospital to anyone in need of dialysis
                    treatment. Thanks for making a difference in my life.
                  </p>
                </div>
                <div className="testimonials__single__author">
                    <h6>Abhinav Jha</h6>
                </div>
              </div>
              <div className="testimonials__single__slide">
                <div className="testimonials__single__content">
                  <p>
                  <span className="icon__quotes"> <BsQuote/></span>I received dialysis treatment at Osmossion and was impressed
                    with the top-notch facilities and compassionate staff. They
                    explained everything in detail, answered my questions, and
                    made sure I was comfortable throughout my treatment. highly
                    recommend this hospital to anyone in need of dialysis
                    treatment. Thanks for making a difference in my life.
                  </p>
                </div>
                <div className="testimonials__single__author">
                    <h6>Abhinav Jha</h6>
                </div>
              </div>
              <div className="testimonials__single__slide">
                <div className="testimonials__single__content">
                  <p>
                  <span className="icon__quotes"> <BsQuote/></span>I received dialysis treatment at Osmossion and was impressed
                    with the top-notch facilities and compassionate staff. They
                    explained everything in detail, answered my questions, and
                    made sure I was comfortable throughout my treatment. highly
                    recommend this hospital to anyone in need of dialysis
                    treatment. Thanks for making a difference in my life.
                  </p>
                </div>
                <div className="testimonials__single__author">
                    <h6>Abhinav Jha</h6>
                </div>
              </div>
              <div className="testimonials__single__slide">
                <div className="testimonials__single__content">
                  <p>
                  <span className="icon__quotes"> <BsQuote/></span>I received dialysis treatment at Osmossion and was impressed
                    with the top-notch facilities and compassionate staff. They
                    explained everything in detail, answered my questions, and
                    made sure I was comfortable throughout my treatment. highly
                    recommend this hospital to anyone in need of dialysis
                    treatment. Thanks for making a difference in my life.
                  </p>
                </div>
                <div className="testimonials__single__author">
                    <h6>Abhinav Jha</h6>
                </div>
              </div>
              <div className="testimonials__single__slide">
                <div className="testimonials__single__content">
                  <p>
                  <span className="icon__quotes"> <BsQuote/></span>I received dialysis treatment at Osmossion and was impressed
                    with the top-notch facilities and compassionate staff. They
                    explained everything in detail, answered my questions, and
                    made sure I was comfortable throughout my treatment. highly
                    recommend this hospital to anyone in need of dialysis
                    treatment. Thanks for making a difference in my life.
                  </p>
                </div>
                <div className="testimonials__single__author">
                    <h6>Abhinav Jha</h6>
                </div>
              </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
              {/* <button className="button" onClick={this.play}>
                Play
              </button> */}
              {/* <button className="button" onClick={this.pause}>
                Pause
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
