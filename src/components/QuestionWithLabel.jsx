import React, { Component } from 'react'


export default class QuestionWithLabel extends Component {
  render() {
    return (
        <div className="w-full">
          <overline className="first">{this.props.label}</overline>
          <h1 className="question font-dm-sans-h1">{this.props.question}</h1>
        </div>
    )
  }
}


