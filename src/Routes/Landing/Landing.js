import React, { Component } from 'react';
import LandingHeader from '../../Components/Landing/LandingHeader';
import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <LandingHeader />
      </div>
    )
  }
}