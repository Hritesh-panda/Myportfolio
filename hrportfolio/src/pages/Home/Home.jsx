import React from "react";
import About from "../about/About";
import Newnavbar from "../navbar/Newnavbar";
import Education from "../education/Education";
import Aboutsec from "../Aboutsection/Aboutsec";
import Skill from "../skills/Skill";
import { HashLink as Link } from "react-router-hash-link";
import "./home.css";
import Project from "../projects/Project";
import Contact from "../contact/Contact";
import Certificate from "../extracertificate/Certificate";
const Home = () => {
  return (
    <div>
      <Newnavbar />
      <About />
      <Aboutsec />
      <Education />
      <Skill />
      <Project />
      <Certificate />
      <Contact />
      <div className="container">
        <div className="arrow">
          <Link to={"#navbarpage"} smooth>
            <button className="up-btn">
              <i class="bi bi-arrow-up-circle"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
