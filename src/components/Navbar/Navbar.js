import React from "react";
import NavbarItem from "./NavbarItem";
import PropTypes from "prop-types";
import CATEGORY from "../../constants/category";
import COUNTRY from "../../constants/country";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.theme.mode} bg-${props.theme.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Navbar */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {CATEGORY.map((category) => {
              return (
                <li key={category} className="nav-item">
                  <NavbarItem item={category} />
                </li>
              );
            })}
          </ul>

          {/* Right Navbar */}
          <div className="d-flex  justify-content-between">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </a>
                <div className="dropdown-menu">
                  <ul className="p-1 d-flex flex-wrap country-dropdown">
                    {COUNTRY.map((coun) => {
                      return (
                        <li
                          key={coun}
                          className={`nav-item p-2 text-center ${
                            props.country === coun ? " btn btn-" + props.theme.button : ""
                          }`}
                          onClick={() => {
                            props.changeCountry(coun);
                          }}
                        >
                          {coun}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Articles Per Page
                </a>
                <ul className="dropdown-menu p-0 pageSize-dropdown">
                  {[5, 10, 20, 50].map((size) => {
                    return (
                      <li
                        key={size}
                        className={`nav-item p-3 text-center ${
                          props.pageSize === size ? "w-100 btn btn-" + props.theme.button : ""
                        }`}
                        onClick={() => {
                          props.changePageSize(size);
                        }}
                      >
                        {size}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${props.theme.text}`}
              style={{
                paddingTop: "8px",
              }}
            >
              <input
                className={`form-check-input form-check-input-${props.theme.button}`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.changeTheme}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Navbar.defaultProps = {
//   pageSize: 10,
//   country: "in",
//   theme: {
//     mode: "light",
//     text: "dark",
//     button: "primary",
//   },
// };

Navbar.propTypes = {
  pageSize: PropTypes.number.isRequired,
  theme: PropTypes.object,
  country: PropTypes.string.isRequired,
};

export default Navbar;
