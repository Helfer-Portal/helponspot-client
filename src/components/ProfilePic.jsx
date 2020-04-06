import React, { Component } from 'react'

export default class ProfilePic extends Component {
  render() {
    return (
        <div style={{backgroundImage: 'url("'+ this.props.image +'")'}} className="circle" id="minus">
        </div>
    )
  }
}


