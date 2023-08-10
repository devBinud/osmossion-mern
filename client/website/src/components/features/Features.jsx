import React from "react";
import "./Features.css";
import { GiHospitalCross } from "react-icons/gi";
import { MdWifiCalling3 } from "react-icons/md";
import { FaLaptopMedical } from "react-icons/fa";




const Features = () => {
  return (
    <>
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="features__box">
                <div className="features__box__icon">
                  <GiHospitalCross />
                </div>
                <div className="features__box__title">
                  <h2>Hospitality</h2>
                </div>
                <div className="features__box__desc">
                  <p>
                  Warm hospitality, compassionate care, nurturing environment—prioritizing your comfort and well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features__box middle">
                <div className="features__box__icon">
                  <MdWifiCalling3 />
                </div>
                <div className="features__box__title">
                  <h2>Emergency Care</h2>
                </div>
                <div className="features__box__desc">
                  <p>
                  Quick dialysis emergencies. Expert care. Rapid response. Your well-being, our priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features__box ">
                <div className="features__box__icon">
                  <FaLaptopMedical />
                </div>
                <div className="features__box__title">
                  <h2>Chamber Service</h2>
                </div>
                <div className="features__box__desc">
                  <p>
                  Comprehensive chamber services for specialized care and optimal treatment outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
