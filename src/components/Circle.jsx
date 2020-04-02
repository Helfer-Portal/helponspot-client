import React, { Component } from 'react'
import "./Circle.css"

export default class ButtonBlue extends Component {
  render() {
    return (
        <div style={{backgroundImage: this.props.image}} className="circle" id="minus">
        </div>
    )
  }
}


