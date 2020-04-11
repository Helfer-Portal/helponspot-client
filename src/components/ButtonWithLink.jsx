import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonOrange } from "./UiKit";

export default class ButtonWithLink extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <ButtonOrange
          className={this.props.className}
          children={this.props.children}
        />
      </Link>
    );
  }
}
