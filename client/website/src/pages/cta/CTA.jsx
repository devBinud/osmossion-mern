import React from "react";
import "./CTA.css";
import cta_img from "../../assets/cta/cta-bg-1.jpg";
import { IoIosCall } from "react-icons/io";

const CTA = () => {
  return (
    <>
      <div id="call-to-action" className="call-to-action">
        <img src={cta_img} alt="" />
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>24/7 Call Assistance for Your Peace of Mind</h3>
                <p>
                  We understand that emergencies can happen at any time, which
                  is why we offer 24/7 call assistance for all our services. Our
                  trained professionals are ready to assist you anytime,
                  anywhere, ensuring your peace of mind and timely access to
                  healthcare services.
                </p>
                <button className="cta__button">
                  <span className="me-2"><IoIosCall /></span>
                 <span>
                 <a href="tel:+916901740874" className="cta__call__link">+916-901-740-874</a>
                 </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
