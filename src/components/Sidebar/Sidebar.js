import React, { Component } from "react";
import "./Sidebar.css";
import {
  FaRegSun,
  FaUserCircle,
  FaCalendarAlt,
  FaTags,
  FaChartPie,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Board.</h1>
      <div className="menu">
        <a href="/">
          <FaChartPie /> Dashboard
        </a>
        <a href="/">
          <FaTags /> Transactions
        </a>
        <a href="/">
          <FaCalendarAlt /> Schedules
        </a>
        <a href="/">
          <FaUserCircle /> Users
        </a>
        <a href="/">
          <FaRegSun /> Settings
        </a>
      </div>
      <div className="bottom-menu">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};
export default Sidebar;
