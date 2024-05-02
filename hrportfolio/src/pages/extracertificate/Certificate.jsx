import React from "react";
import "./certificate.css";

const Certificate = () => {
  return (
    <div className="interest-cer">
      <div className="container">
        <div className="cer-content ">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="certificate text-start">
                <h1>Certificate</h1>
                <h2>WHERE I LEARN</h2>
                <div className="details-cer">
                  <span>MERN stack Developer</span> <br />
                  <span>Oasis infobyte Intership</span>
                  <br />
                  <span>SpakFoundationn web design intern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="interest text-start">
                <h1>Interests</h1>
                <h2>OUT OF COADING</h2>
                <div className="row">
                  <div className="col-4">
                    <span>Photography</span> <br />
                    <span>Travel</span> <br />
                    <span>Riding</span>
                  </div>
                  <div className="col-4 text-start">
                    <span>Yoga</span> <br />
                    <span>Reading</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
