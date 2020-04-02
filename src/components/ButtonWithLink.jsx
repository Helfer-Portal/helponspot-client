import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ButtonOrange from "./ButtonOrange"

export default class ButtonWithLink extends Component {
  render() {
    return (
        <Link to={this.props.link}>
          <ButtonOrange children={this.props.children}/>
        </Link>
    )
  }
}


