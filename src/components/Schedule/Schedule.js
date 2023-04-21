import React, { Component } from 'react'
import './Schedule.css'
export default class Schedule extends Component {
  render() {
    return (
      <div className='schedule'>
            <h2>Schedule</h2>
            <div className='box1'>
                <p>Meeting with suppliers from Kuta Bali</p>
                <p>14.00-15.00</p>
                <p>at Sunset Road, Kuta, Bali </p>
            </div>
            <div className='box2'>
                <p>Check operation at Giga Factory 1</p>
                <p>18.00-20.00</p>
                <p>at Central Jakarta </p>
            </div>
      </div>
    )
  }
}
