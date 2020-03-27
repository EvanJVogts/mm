import React, { Component } from 'react';
import './LandingHeader.css';

export default class LandingHeader extends Component {
  render() {
    return (
      <section className="Landing-header">
        <p>Info about the app</p>
        <p>Click to continue</p>
      </section>
    )
  }
}