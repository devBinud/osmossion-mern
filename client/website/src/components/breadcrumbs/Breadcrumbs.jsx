import React from 'react';
import "./Breadcrumbs.css";


const Breadcrumbs = (props) => {
  return (
    <>
    <div className="breadcrumbs">
        <div className="container">
            <div className="breadcrumbs__wrapper">
                <h2>{props.title}</h2>
                <div className="breadcrumbs__list">
                    <p><a href={"/"} className='breadcrumbs__list__item'>Home</a> <span className='forward__slash'>/</span> <span>{props.componentName}</span></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Breadcrumbs