import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        class="w-full mr-auto lg:mx-0 hover:underline orange-gradient text-white font-bold font-inter rounded-full my-6 py-4 px-8 shadow-lg"
      >
        {this.props.children}
      </button>
    );
  }
}
