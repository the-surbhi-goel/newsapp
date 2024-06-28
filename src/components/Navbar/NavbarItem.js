import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default class NavbarItem extends Component {
  static defaultProps = {
    item: "general",
  };

  static propTypes = {
    item: PropTypes.string.isRequired,
  };

  render() {
    return (
      <NavLink
        className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
        to={`/${this.props.item}`}
      >
        {this.props.item.charAt(0).toUpperCase() + this.props.item.substring(1, this.props.item.length)}
      </NavLink>
    );
  }
}
