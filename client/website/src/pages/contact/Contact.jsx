import React from 'react';
import "./Contact.css";
import MyContact from '../../components/contact/MyContact'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Breadcrumbs
        title="Contact Us"
        componentName="Contact Us"/>
         <MyContact/>
      </div>
    </>
  )
}

export default Contact