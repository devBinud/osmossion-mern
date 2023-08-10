import React from 'react';
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <>
     <button className='button__primary'>{props.title}</button>
    </>
  )
}

export default Buttons