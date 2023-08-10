import React from 'react';
import './OurServices.css';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Services from '../../pages/services/Services';

const OurServices = () => {
  return (
    <div className="services__wrapper">
        <Breadcrumbs title="Our Services" componentName="Our Services"/>
        <div className="container">
             <Services/>
        </div>
    </div>
  )
}

export default OurServices