import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ms-auto p-4 sticky-top ${styles.bar}`}>
        <div className="container">
          <NavLink
            className={`navbar-brand text-white ${styles.logo} `}
            to={"/"}
          >
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 me-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0 ">
              <li className="nav-item  ">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link  p-2 text-white  ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                  to={"about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link  p-2 text-white  ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                  to={"protofolio"}
                >
                  Protofolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link  p-2 text-white ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                  to={"contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
