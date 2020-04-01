import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            {this.props.children}
      </button>
    )
  }
}


