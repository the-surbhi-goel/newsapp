import React, { Component } from "react";
import NavbarItem from "./NavbarItem";
import PropTypes from "prop-types";

import './Navbar.css';

export class Navbar extends Component {
  static defaultProps = {
    pageSize: 10,
    theme: {
      mode: "light",
      text: "dark",
      button: "primary",
    },
  };

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    theme: PropTypes.object,
  };

  categoryList = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  constructor(props) {
    super(props);
    this.state = {
      pageSize: this.props.pageSize,
    };
  }

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${this.props.theme.mode} bg-${this.props.theme.mode}`}
      >
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
              {this.categoryList.map((category) => {
                return (
                  <li className="nav-item">
                    <NavbarItem key={category} item={category} />
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
                    Articles Per Page
                  </a>
                  <ul className="dropdown-menu p-0">
                    <li
                      className={`nav-item p-3 text-center ${
                        this.props.pageSize === 5 ? "w-100 btn btn-" + this.props.theme.button : ""
                      }`}
                      onClick={() => {
                        this.props.changePageSize(5);
                      }}
                    >
                      5
                    </li>
                    <li
                      className={`nav-item p-3 text-center ${
                        this.props.pageSize === 10 ? "w-100 btn btn-" + this.props.theme.button : ""
                      }`}
                      onClick={() => {
                        this.props.changePageSize(10);
                      }}
                    >
                      10
                    </li>
                    <li
                      className={`nav-item p-3 text-center ${
                        this.props.pageSize === 20 ? "w-100 btn btn-" + this.props.theme.button : ""
                      }`}
                      onClick={() => {
                        this.props.changePageSize(20);
                      }}
                    >
                      20
                    </li>
                  </ul>
                </li>
              </ul>

              <div
                className={`form-check form-switch text-${this.props.theme.text}`}
                style={{
                  paddingTop: "8px",
                }}
              >
                <input
                  className={`form-check-input form-check-input-${this.props.theme.button}`}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={this.props.changeTheme}
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
  }
}

export default Navbar;
