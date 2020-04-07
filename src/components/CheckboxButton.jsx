import React, { Component } from "react";
import "./CheckboxButton.css";

export default class Button extends Component {
  render() {
    const color = this.props.color !== null ? this.props.color : "";
    return (
      <div
        style={{ position: "relative" }}
        className={`rounded-lg ${color}`}
        id="ck-button"
      >
        <label style={{ width: this.props.text.length * 11 + "px" }}>
          <input type="checkbox" value="1" />
          <span>{this.props.text}</span>
        </label>
      </div>
    );
  }
}
