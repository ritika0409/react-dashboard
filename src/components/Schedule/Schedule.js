import React, { Component } from "react";
import "./Schedule.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule-heading">
        <h1>Schedule</h1>
        <p>
          See All
          <MdKeyboardArrowRight />
        </p>
      </div>

      <div className="box1">
        <p>Meeting with suppliers from Kuta Bali</p>
        <p>14.00-15.00</p>
        <p>at Sunset Road, Kuta, Bali </p>
      </div>
      <div className="box2">
        <p>Check operation at Giga Factory 1</p>
        <p>18.00-20.00</p>
        <p>at Central Jakarta </p>
      </div>
    </div>
  );
};
export default Schedule;
