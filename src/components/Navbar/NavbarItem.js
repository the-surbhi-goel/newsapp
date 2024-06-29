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
      <NavLink to={`/${this.props.item}`}
        className={({isActive}) => `nav-link ${isActive ? "active" : "pending"}`}
      >
        {this.props.item.charAt(0).toUpperCase() + this.props.item.substring(1, this.props.item.length)}
      </NavLink>
    );
  }
}
