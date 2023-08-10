import React from "react";
import "./MyFooter.css";
import footer__logo from "../../assets/logo/footer__logo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
// SOCIAL ICONS
import {  FaFacebookF ,FaInstagram , FaYoutube} from "react-icons/fa";
import {BsLinkedin, BsPinterest} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MyFooter = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href={"/"} style={{textDecoration:'none'}} className="logo d-flex align-items-center">
                 <img src={footer__logo} className="img-fluid" alt="footer-logo" />
              </a>
              <p>
                We know that living with kidney disease can be challenging, but
                with the right care and support, you can maintain a high quality
                of life. Let us help you on your journey to better health.
                Contact us today to learn more about our services and schedule a
                consultation with one of our experienced healthcare
                professionals.
              </p>
              <div className="social-links d-flex mt-4">
                <NavLink to="https://www.facebook.com/profile.php?id=100094909353953" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </NavLink>
                <NavLink to="https://instagram.com/osmossion?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </NavLink>
                <NavLink to="https://www.linkedin.com/company/96467643/admin/?feedType=following" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </NavLink>
                <NavLink to="https://in.pinterest.com/osmossiondialysis" target="_blank" rel="noopener noreferrer">
                  <BsPinterest />
                </NavLink>
                <NavLink to="https://www.youtube.com/@osmossiondialysis" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </NavLink>
              </div>
            </div>
            {/* QUICK LINKS */}
                <div className="col-lg-2 col-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/our-services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Recent Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/kidney-health-education">
                    Kidney Health Education
                  </NavLink>
                </li>
                
              </ul>
            </div>
               <div className="col-lg-2 col-6 footer-links">
              <h4>Educational Topics</h4>
              <ul>
                <li>
                  <NavLink to="/kidney-health-education">Acute Renal Failure</NavLink>
                </li>
                <li>
                  <NavLink to="/kidney-health-education">Human Kidney System</NavLink>
                </li>
                <li>
                  <NavLink to="/kidney-health-education">Kidney Transplant</NavLink>
                </li>
                <li>
                  <NavLink to="/kidney-health-education">Know About Nephron</NavLink>
                </li>
                <li>
                  <NavLink to="/kidney-health-education">
                  Understanding of CKD
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kidney-health-education">
                  Glomerular Filtration Rate
                  </NavLink>
                </li>
              </ul>
            </div>

      
            <div className="col-lg-3 col-md-12 col-12 footer-contact text-left text-md-start">
              <h4>Contact Us</h4>
              <h6 className="contact__us__subtitle">For Appointment</h6>
              <p>
                <AiOutlineWhatsApp /> <span>+91 6901740874</span>
              </p>
              <h6 className="contact__us__subtitle mt-3">For Employment</h6>
              <p> Send CV to</p>
              <p>
                <BsEnvelopeFill /> <span>osmossiondialysis@gmail.com</span>
              </p>
              <h6 className="contact__us__subtitle mt-3">
                For Business Queries
              </h6>
              <p>
                <MdCall /> <span>+91 6901740874</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="custom__hr_style"/>

        <div className="copyright text-center mt-4">
          <p>
            &copy; <span>Copyright</span>
            <strong className="px-1" style={{ color: "#009DFF" }}>
              {" "}
              2023 ,
            </strong>{" "}
            Osmossion |<span> All Rights Reserved</span> | Designed & Developed
            by &nbsp;
            <a href="https://codepilot.in/" className="copyright__links">
              Codepilot Technologies
            </a>
            </p>
            <div className="footer__information">
              <p>
                This site is for informational purposes only and is not intended
                to be a substitute for medical advice from a medical provider.
              </p>
              <p>
                Please check with a medical professional if you need a diagnosis
                and/or for treatments as well as information regarding your
                specific condition. In case of emergency visit
                your nearest hospital.
              </p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
