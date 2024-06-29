import React, { Component } from "react";
import NavbarItem from "./NavbarItem";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    pageSize: 10,
  };

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
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

  liStyle = {};

  constructor(props) {
    super(props);
    this.state = {
      pageSize: this.props.pageSize,
    };
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {this.categoryList.map((category) => {
                  return (
                    <li className="nav-item">
                      <NavbarItem key={category} item={category} />
                    </li>
                  );
                })}
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
                  <ul className="dropdown-menu p-0">
                    <li
                      className={`nav-item p-3 text-center ${
                        this.props.pageSize === 5 ? "btn btn-primary w-100" : ""
                      }`}
                      onClick={() => {
                        this.props.changePageSize(5);
                      }}
                    >
                      5
                    </li>
                    <li
                      className={`nav-item p-3 text-center ${
                        this.props.pageSize === 10 ? "btn btn-primary w-100" : ""
                      }`}
                      onClick={() => {
                        this.props.changePageSize(10);
                      }}
                    >
                      10
                    </li>
                    <li
                      className={`nav-item p-3 text-center ${
                        this.props.pageSize === 20 ? "btn btn-primary w-100" : ""
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
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
