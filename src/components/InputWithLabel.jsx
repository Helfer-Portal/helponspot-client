import React, { Component } from "react";

export default class QuestionWithAnnotation extends Component {
  render() {
    return (
      <div>
        <overline className="label font-inter text-figmaDescription">
          {this.props.label}
        </overline>
        <br />
        <input
          style={{ width: 435 }}
          className="p-2 border-lg"
          type="text"
          placeholder={"z.B. DRK Berlin"}
          id={this.props.fname}
          name={this.props.fname}
        />
      </div>
    );
  }
}
