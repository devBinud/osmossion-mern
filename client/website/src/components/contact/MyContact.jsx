import React, { useRef } from "react";
import "./MyContact.css";
import contact__img from "../../assets/contact/contact.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyContact = () => {
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

    emailjs.sendForm(
        "service_lqgcehh",
        "template_ademqcp",
        form.current,
        "sLJBExdd_H-bwXYVI"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          resetForm();

        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const resetForm = () => {
    form.current.reset();
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__title mt-4">
            <h3>Contact us for more information</h3>
            <p style={{ color: "#646464" }}>
              If you have any questions or would like to schedule an
              appointment, please don't hesitate to contact us.
            </p>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-md-5">
              <div className="contact__form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="col-lg-12">
                    <input type="text" name="user_name" placeholder="Name" />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="phone"
                      name="user_phone"
                      placeholder="Phone No"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="textarea"
                      name="user_message"
                      placeholder="Enter your Message"
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <button className="button__primary" onClick={notify}>
                      Send Us
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={contact__img} alt="contact-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyContact;
