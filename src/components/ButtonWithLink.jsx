import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimaryOrange } from "./UiKit";

export default class ButtonWithLink extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <ButtonPrimaryOrange
          className={this.props.className}
          children={this.props.children}
        />
      </Link>
    );
  }
}
