import React, { useState } from "react";
import Hamburger from "hamburger-react";
import StyleSheet from "reactjs-stylesheet";
import { colors } from "../Assets/Colors";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar({ isHomePage }) {
  const [isOpen, setOpen] = useState(false);

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const navigate = useNavigate();

  const goToAbout = (link) => {
    navigate(link);
  };

  return (
    <nav className="navbar navbar-expand-lg site-main-colour rounded-navbar ">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light fw-bold m-2" to="/home">
        {/* <img src="images/Logo.jpg" className="ms-1 navLogo" alt="Bootstrap" width="55" height="55"/> */}
        ArenaHQ
        </NavLink>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                className=" nav-link active fs-5 me-1 text-light fw-semibold"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item fs-5">
              <NavLink
                className="nav-link active me-1 text-light fw-semibold"
                to="/topics"
              >
                Learnings
              </NavLink>
            </li>
            <li className="nav-item fs-5 me-1 fw-semibold">
              <NavLink className="nav-link active text-light" to="/quiz">
                Quiz
              </NavLink>
            </li>
            <li className="nav-item fs-5 me-2 fw-semibold">
              <NavLink className="nav-link active text-light" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
