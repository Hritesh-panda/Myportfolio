import React from "react";
import "./education.css";
const Education = () => {
  return (
    <div id="educationpage">
      <div className="container">
        <h1 className="text-start edu-h1">Education</h1>
        <h2 className="text-start edu-h2">WHAT I'VE LEARNED</h2>
        <div className="row edu-row">
          <div className="col-lg-6 col-sm-12">
            <div className="edu-content">
              <div className="box">
                <h4>2019 - 2022</h4>
                <h3>Bachelor's Degree</h3>
                <p>
                  Sambalpur University - Odisha <br /> Bachelor Of Computer
                  Application <br />
                  CGPA: 8.60
                </p>
              </div>
              <div className="box">
                <h4>2017 - 2019</h4>
                <h3>Intermediate</h3>
                <p>
                  LCS,Chichaiguda - Odisha <br /> +2 science CHSE <br />
                  Mark: 58%
                </p>
              </div>
              <div className="box">
                <h4>2005 - 2017</h4>
                <h3>High School</h3>
                <p>
                  SSVM Brajavihar, Bhawanipatna
                  <br /> 10th CHSC <br />
                  Mark: 70%
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="Learning-cuate.png" alt="no" className="edu-img mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
