import React, { Component } from 'react'

export default class QuestionWithAnnotation extends Component {
  render() {
    return (
        <div>
            <overline className="label">{this.props.label}</overline>
            <br/>
            <input type="text" id={this.props.fname} name={this.props.fname}/>
        </div>
    )
  }
}


