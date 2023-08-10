import React from "react";
import "./KidneyHealthEducation.css";
// import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
// import kindey__education__img from "../../assets/kidneyeducation/mission.png";
import KidneyHealthInner from "../kidneyHealthInner/KidneyHealthInner";

const KidneyHealthEducation = () => {
  return (
    <>
      <div className="kidneyhealtheducation">
        {/* <Breadcrumbs
          title="Kidney Health Education"
          componentName="Kidney Health Education"
        /> */}
        <div className="container">
          {/* <div className="kidney__health__upper">
            <div className="row">
              <div className="kidney__health__upper__title">
                <h4>
                  Empower yourself with {" "}
                  <span style={{ color: "#5DB2FF" }}>
                    kidney health knowledge
                  </span>
                </h4>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="kidney__health__upper__left">
                  <h6>
                    Welcome to our Dialysis Center's kidney health education
                    section. We believe that knowledge is power when it comes to
                    managing your kidney health. Here, you will find valuable
                    information, resources, and tips to help you understand the
                    importance of kidney health, make informed choices, and lead
                    a healthier life. Our goal is to empower you with the
                    knowledge you need to take control of your well-being and
                    thrive.
                  </h6>
                </div>
              </div>
              <div className="col-md-5">
                <div className="kidney__health__upper__right">
                  <img
                    src={kindey__education__img}
                    alt="kidney-health-education"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div> */}
         
        </div>
        <div className="kidney__health__lower__content">
            <KidneyHealthInner/>
          </div>
      </div>
    </>
  );
};

export default KidneyHealthEducation;
