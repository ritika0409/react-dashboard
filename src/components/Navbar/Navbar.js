import React, { Component } from 'react'
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import "./Navbar.css"
export default class 
 extends Component {
  render() {
    return (
      <div className='navbar'>
        <h1>Dashboard</h1>
        <div className='search'>
          <input 
            type="search"
            name=""
            id=""
            placeholder="Search..."
            />
          <span class="icon"><BiSearch/></span>

        </div>
        <BsBell/>
        <BsBell/>
      </div>
    )
  }
}