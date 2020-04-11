import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const classes = this.props.className ? " " + this.props.className : "";
    return (
      <button
        className={
          "mr-auto lg:mx-0 hover:underline orange-gradient text-white font-bold font-inter rounded-full my-6" +
          " py-4 px-8 shadow-lg" +
          classes
        }
      >
        {this.props.children}
      </button>
    );
  }
}
