import React, { Component } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Dashboard</h1>
      <div className="search">
        <input type="search" name="" id="" placeholder="Search..." />
        <span class="icon">
          <BiSearch />
        </span>
      </div>
      <BsBell />
      <Link to="/">
        <img src="./plane.png"></img>
      </Link>
    </div>
  );
};
export default Navbar;
