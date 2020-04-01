import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from "./Button"

export default class ButtonWithLink extends Component {
  render() {
    return (
        <Link to={this.props.link}>
          <Button children={this.props.children}/>
        </Link>
    )
  }
}


