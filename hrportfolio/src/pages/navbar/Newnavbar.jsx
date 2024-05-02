import React from "react";
import "./navbar.css";

import { HashLink as Link } from "react-router-hash-link";
const Newnavbar = () => {
  return (
    <div className="nav-color py-2" id="navbarpage">
      <nav class="navbar navbar-expand-lg container ">
        <button
          class="navbar-toggler nav-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item pe-2">
              <Link className="nav-link nav-li" to={"/"}>
                <i class="bi bi-house-door-fill pe-1"></i>HOME
              </Link>
            </li>

            <li class="nav-item pe-2">
              <Link className="nav-link nav-li" to={"#aboutpage"} smooth>
                {" "}
                <i class="bi bi-person-fill pe-1"></i>ABOUT
              </Link>
            </li>

            <li class="nav-item pe-2">
              <Link className="nav-link nav-li" to={"#educationpage"} smooth>
                <i class="bi bi-mortarboard pe-1"></i>EDUCATION
              </Link>
            </li>

            <li class="nav-item pe-2">
              <Link className="nav-link nav-li" to={"#skillspage"} smooth>
                <i class="bi bi-code-slash pe-1"></i>SKILLS
              </Link>
            </li>

            <li class="nav-item pe-2">
              <Link className="nav-link nav-li" to={"#projectpage"} smooth>
                <i class="bi bi-cast pe-1"></i>PROJECT
              </Link>
            </li>

            <li class="nav-item pe-2">
              <Link className="nav-link nav-li" to={"#contactpage"} smooth>
                <i class="bi bi-chat-left-dots-fill pe-1"></i>CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Newnavbar;
