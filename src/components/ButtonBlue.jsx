import React, { Component } from 'react'

export default class ButtonBlue extends Component {
  render() {
    return (
      <button className="mx-auto lg:mx-0 hover:underline blue-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            {this.props.children}
      </button>
    )
  }
}


