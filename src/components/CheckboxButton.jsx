import React, { Component } from 'react'
import "./CheckboxButton.css"

export default class Button extends Component {
  render() {
    return (
        <div  id="ck-button">
          <label style={{width: this.props.text.length * 11 +"px"}}>
            <input
                type="checkbox" value="1"/>
            <span>{this.props.text}</span>
          </label>
        </div>
    )
  }
}


