import React, { Component } from 'react'

export default class QuestionWithLabel extends Component {
  render() {
    return (
        <div>
          <overline className="first">{this.props.label}</overline>
          <h1 className="question">{this.props.question}</h1>
        </div>
    )
  }
}


