import React from 'react';
import "./ContentWithIcons.css";
import {MdMedicalInformation} from "react-icons/md"



const ContentWithIcons = () => {
  return (
    <>
    <div className="content__with__icons">
        <div className="container">
            <div className="content__with__icons__inner">
                <div className="small__box">
                    <div className="icons">
                    <MdMedicalInformation/>
                    </div>
                    <h6>Reliable Equipment</h6>
                </div>
                <div className="small__box">
                    <div className="icons">
                    <MdMedicalInformation/>
                    </div>
                    <h6>24/7 Patient care</h6>
                </div>
                <div className="small__box">
                    <div className="icons">
                    <MdMedicalInformation/>
                    </div>
                    <h6>Best technicians</h6>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContentWithIcons