import React from "react";
import "./FAQ.css";
import AcuteRenal from "../../components/faqaccordian/acuteRenal/AcuteRenal";
import FunctionsOfKidney from "../../components/faqaccordian/functionsOfKidney/FunctionsOfKidney";
import KidneyTransplant from "../../components/faqaccordian/kidneyTransplant/KidneyTransplant";
import SatgesOfCkd from "../../components/faqaccordian/stagesOfCkd/StagesOfCkd";
import UnderstandingCkd from "../../components/faqaccordian/understandingCkd/UnderstandingOfCkd";
import Nephron from "../../components/faqaccordian/humanKidneySystem/HumanKidneySystem";
import HumanKidneySystem from "../../components/faqaccordian/nephron/Nephron";
import GFR from "../../components/faqaccordian/gfr/GFR";
import Peritoneal from "../../components/faqaccordian/peritonealDialysis/Peritoneal";

const FAQ = () => {
  return (
    <>
      <div className="faq__outer__wrapper">
        <div className="container">
          <div className="faq">
            <div className="faq__title">
              <h3>Frequently Asked Questions</h3>
              <p className="faq__title__para">
              Quick answers to common questions about dialysis at our hospital. Get the information you need for a smooth dialysis experience.
              </p>
            </div>
            <div className="faq__inner__wrapper">
                <div className="row gy-4">
                  <div className="col-lg-3">
                    <ul className="nav nav-tabs flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link active show"
                          data-bs-toggle="tab"
                          href="#tab-1"
                        >
                          Acute Renal Failure
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                          Basic Functions of Kidney
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                          Human Kidney System
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                          Kidney Transplant
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                          Stages Of CKD
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-6">
                          Understanding of CKD
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-7">
                          Know About Nephron
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-8">
                          Glomerular Filtration Rate
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-9">
                          Peritoneal Dialysis
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-lg-9">
                    <div className="tab-content">
                      <div className="tab-pane active show" id="tab-1">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Acute Renal Failure</h3>
                             <AcuteRenal/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-2">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3> Basic Functions of Kidney</h3>
                            <FunctionsOfKidney/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-3">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Human Kidney System</h3>
                            <HumanKidneySystem/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-4">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Kidney Transplant</h3>
                             <KidneyTransplant/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-5">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Stages Of CKD</h3>
                            <SatgesOfCkd/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-6">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Understanding of CKD</h3>
                            <UnderstandingCkd/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-7">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Know About Nephron</h3>
                            <Nephron/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-8">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Glomerular Filtration Rate</h3>
                            <GFR/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-9">
                        <div className="row gy-4">
                          <div className="col-lg-12 details order-2 order-lg-1">
                            <h3>Peritoneal Dialysis</h3>
                            <Peritoneal/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
