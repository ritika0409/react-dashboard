import React, { Component } from 'react'
import "./LoginWindow.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
export default class LoginWindow extends Component {
  render() {
    return (
        <div>
        
      <div className='loginwindow'>
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
        <div className='signin-buttons'>
            <button>
                <FcGoogle/>Sign in with Google
            </button>
            <button>
                <AiFillApple/>Sign in with Apple
            </button>
        </div>
        <div className='login-box'>
            <p>Email address</p>
            <input type='email'></input>
            <p>Password</p>
            <input type='password'></input>
            <p className='forgot'>Forgot Password?</p>
            <button className='signin'>Sign In</button>
        </div>
        <div className='signup-info'>
            <p>Don't have an account?</p>
            <button className='register'>Register here</button>
        </div>
        
      </div>
          
      </div>
    )
  }
}
