import React from "react";
import "./about.css";
import aboutimg1 from "../images/aboutimg.avif";
import mypic from "../images/mypic.jpg";
import { Link } from "react-router-dom";
const About = () => {
  const resumeUrl = "resume.pdf";
  const handleresume = () => {
    window.open(resumeUrl, "_blank");
  };
  return (
    <div>
      <div className="row about-cont m-0">
        <div className="col-lg-9 col-sm-12 p-0">
          <div className="a-container">
            <img src={aboutimg1} alt="no" />
            <div className="about-content">
              <div className="container">
                <div className="ab-txt">
                  <h1>HELLO, I'M</h1>
                  <h2>Hritesh Panda.</h2>
                  <h6>MERN Stack Developer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12  p-0">
          <div className="about-me">
            <div className="container">
              <div className="my-content">
                <div className="mypic-content">
                  <img src={mypic} alt="yes" />
                </div>
                <h1>Hritesh Panda.</h1>
                <div className="sk-a">
                  <span>ReactJs Developer</span>
                  <br />
                  <span>Front-end Developer</span> <br />
                  <span>Node.JS Developer</span> <br />
                </div>
                <div className="en-a">
                  <span>hrites.panda@gmail.com</span> <br />
                  <span>+91 77358 41637</span>
                </div>
                <div className="links">
                  {" "}
                  <Link to={"https://www.linkedin.com/in/hriteshpanda/"}>
                    {" "}
                    <i class="bi bi-linkedin s-icn"></i>
                  </Link>{" "}
                  <Link to={"https://github.com/Hritesh-panda"}>
                    <i class="bi bi-github s-icn"></i>
                  </Link>{" "}
                  <Link to={"https://www.facebook.com/hritesh.panda.7"}>
                    <i class="bi bi-facebook s-icn"></i>
                  </Link>{" "}
                  <Link>
                    <i class="bi bi-instagram s-icn"></i>
                  </Link>{" "}
                </div>
                <button onClick={handleresume}>Downlaod CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
