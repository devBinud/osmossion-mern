import { useState } from "react";
import "./Services.css";
import home__dialysis__img from "../../assets/services/home-dialysis.jpg";
import inhospital__dialysis__img from "../../assets/services/hospital-dialysis.jpg";
import { FaRegHospital } from "react-icons/fa";
import { TbHomePlus } from "react-icons/tb";
import { BsPersonRolodex } from "react-icons/bs";
import { GiHealthCapsule } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import {RxDoubleArrowRight} from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate =useNavigate();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="services__wrapper">
      <div className="container">
        <div className="services__wrapper__title text-center">
          <h3>Elevating the quality of life</h3>
          <p className="text-secondary">
            Experience comfort, care, and safety throughout your dialysis
            journey, as we prioritize your well-being at every step
          </p>
        </div>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <h5>
              <TbHomePlus />
              <span className="ms-2">Home Hemodialysis</span>{" "}
            </h5>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <h5>
              <FaRegHospital />{" "}
              <span className="ms-2">In Center Dialysis</span>
            </h5>
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="home__dialysis__content">
              <div className="row">
                <div className="col-md-7 d-flex align-items-center">
                  <div className="home__dialysis__content__left">
                    <h2>Home Hemodialysis</h2>
                    <p>
                      Home hemodialysis is an innovative and convenient dialysis
                      service that allows patients to perform their treatments
                      in the comfort of their own homes. This service is ideal
                      for patients who want to minimize the disruption of their
                      daily lives and maintain their independence while
                      receiving the necessary treatment.
                    </p>
                    <button className="home__dialysis__button__read__more" onClick={()=>navigate("/home-hemodialysis")}>Click here to know more about this <span className="ms-2"><RxDoubleArrowRight /></span> </button>
                    <div className="content__with__icons__inner">
                      <div className="small__box">
                        <div className="icons">
                          <GiHealthCapsule />
                        </div>
                        <h6>Reliable Equipment</h6>
                      </div>
                      <div className="small__box">
                        <div className="icons">
                          <GiTechnoHeart />
                        </div>
                        <h6>24/7 Patient care</h6>
                      </div>
                      <div className="small__box">
                        <div className="icons">
                          <BsPersonRolodex />
                        </div>
                        <h6>Best technicians</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="home__dialysis__content__right">
                    <img
                      src={home__dialysis__img}
                      className="img-fluid"
                      alt="home-dialysis"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="home__dialysis__content">
              <div className="row">
                <div className="col-md-7 d-flex align-items-center">
                  <div className="home__dialysis__content__left">
                    <h2>In Center Dialysis</h2>
                    <p>
                    At Osmossion, we deeply understand and acknowledge the paramount significance of in-center hemodialysis therapy for individuals suffering from kidney failure. We are dedicated to offering exemplary and unparalleled care of the highest standard, meticulously tailored to address the distinctive requirements of every patient. Our unwavering commitment rests upon ensuring their overall well-being and utmost comfort throughout their treatment journey.
                    </p>
                    <button className="home__dialysis__button__read__more" onClick={()=>navigate("/in-center-dialysis")}>Click here to know more about this <span className="ms-2"><RxDoubleArrowRight /></span> </button>
                    <div className="content__with__icons__inner">
                      <div className="small__box">
                        <div className="icons">
                          <FaUserNurse />
                        </div>
                        <h6>Our Best Nephrologists</h6>
                      </div>
                      <div className="small__box">
                        <div className="icons">
                          <MdOutlineBedroomChild />
                        </div>
                        <h6>High Tech Surgery Room</h6>
                      </div>
                      <div className="small__box">
                        <div className="icons">
                          <GiTechnoHeart />
                        </div>
                        <h6>24/7 Management care</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="home__dialysis__content__right">
                    <img
                      src={inhospital__dialysis__img}
                      className="img-fluid"
                      alt="home-dialysis"
                    />
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

export default Services;
