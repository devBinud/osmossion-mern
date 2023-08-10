import React from 'react';
import Lottie from "lottie-react";
import page__not__found from "../../assets/lottie/error.json"
import "./NotFound.css";


const NotFound = () => {
  return (
    <>
    <div className="not__found">
        <div className="container">
             <div className="not__found__wrapper">
             <Lottie animationData={page__not__found} loop={true} />
             </div>
        </div>
    </div>
    </>
  )
}

export default NotFound