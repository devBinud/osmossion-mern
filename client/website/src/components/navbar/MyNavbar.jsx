import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./MyNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import nav__logo from "../../assets/logo/nav__logo.png";
import { SlCalender } from "react-icons/sl";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };


  const notify = () =>
    toast.success("Your Message is Sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "colored",
    });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqgcehh",
        "template_oagcmfn",
        form.current,
        "sLJBExdd_H-bwXYVI"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Appointment Booked Successfully");
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const resetForm = () => {
    form.current.reset();
  };
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        bg="light"
        variant="light"
        className="bg-body-tertiary"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href={"/"}>
            <img
              src={nav__logo}
              alt="nav-logo"
              className="nav__logo image__fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle
      onClick={() => setExpanded(!expanded)}
      aria-controls="responsive-navbar-nav"
    />
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse  id="responsive-navbar-nav"  expanded={expanded ? "true" : "false"}>
            <Nav className="mx-auto">
              <LinkContainer to="/" onSelect={handleSelect}>
                <Nav.Link className="text-uppercase nav-links" >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" onSelect={handleSelect}>
                <Nav.Link className="text-uppercase nav-links">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/kidney-health-education" onSelect={handleSelect}>
                <Nav.Link className="text-uppercase nav-links" >
                  Kidney Health Education
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/our-services" onSelect={handleSelect}>
                <Nav.Link className="text-uppercase nav-links">
                  Services
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blogs" onSelect={handleSelect}>
                <Nav.Link className="text-uppercase nav-links" >Blogs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" onSelect={handleSelect}>
                <Nav.Link className="text-uppercase nav-links">
                  Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <div className="book__an__appointment">
              <button
                className="book__an__appointment__button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book an appointment
                <span className="ms-2">
                  <SlCalender />
                </span>{" "}
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MODAL FOR BOOK AN APPOINTMENT */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header" style={{ borderBottom: "none" }}>
              <h1 className="modal-title fs-5" id="#">
                Make An Appointment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row d-flex justify-content-between">
                <div className="col-md-12">
                  <div className="contact__form">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="appointment_user_name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="phone"
                            name="appointment_user_phone"
                            placeholder="Phone No"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="number"
                            name="appointment_user_age"
                            placeholder="Age"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <label className="text-secondary ms-1" htmlFor="appoitment-date">Appointment Date</label>
                        <input
                        className="mt-2"
                          type="date"
                          name="appointment_user_date"
                          placeholder="Appointment Date"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="textarea"
                          name="appointment_user_address"
                          placeholder="Address"
                          style={{ height: "100px" }}
                        />
                      </div>
                      <div className="col-lg-12">
                        {/* <button className="button__primary">
                          Send Us
                        </button> */}
                        {/* <ToastContainer /> */}
                      </div>
                      <div className="col-lg-12">
                        <button className="button__primary" onClick={notify}>
                          Confirm Booking
                        </button>
                        <ToastContainer />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{
                borderTop: "none",
                marginTop: "-26px",
                marginLeft: "18px",
                marginRight: "10px",
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
