import React, { Component } from "react";

export default class QuestionWithAnnotation extends Component {
  render() {
    return (
      <div className="w-full">
        <overline className="label font-inter text-figmaDescription">
          {this.props.label}
        </overline>
        <br />
        <input
          className="p-2 border-lg w-full"
          type="text"
          placeholder={"z.B. DRK Berlin"}
          id={this.props.fname}
          name={this.props.fname}
        />
      </div>
    );
  }
}
