import React from "react";
import "./contact.css";
import Contactnew from "./Contactnew";
const Contact = () => {
  return (
    <>
      <div className="c-content text-start container">
        <h1>Contact</h1>
        <h2>LET'S TALK TOGATHER</h2>
      </div>
      <div className="contact-page" id="contactpage">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <div className="c-left text-start">
                <h2 className="text-white my-3">Get in touch</h2>
                <h6 className="text-white mb-3">
                  Email: hrites.panda@gmail.com
                </h6>
                <h6 className="text-white mb-3">+91 7735841637</h6>
                <p className="text-white my-3 lh-lg ws-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quisquam odio eum velit minus laudantium cupiditate
                  suscipit itaque id soluta.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 text-start">
              <Contactnew />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
