import React, { Component } from 'react'
import './Login.css';
import LoginWindow from '../../components/LoginWindow/LoginWindow'

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h1 className='left-content'>Board.</h1>
        <div className='right-content'>
            <LoginWindow/>
        </div>
        
      </div>
    )
  }
}
