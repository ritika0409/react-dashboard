import React, { useState } from "react";
import "./LineChart.css";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const LineChart = () => {
  const options = {
    animationEnabled: true,
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "User",
        showInLegend: true,
        dataPoints: [
          { y: 155, label: "Jan" },
          { y: 150, label: "Feb" },
          { y: 152, label: "Mar" },
          { y: 148, label: "Apr" },
          { y: 180, label: "May" },
          { y: 150, label: "Jun" },
          { y: 146, label: "Jul" },
          { y: 149, label: "Aug" },
          { y: 153, label: "Sept" },
          { y: 158, label: "Oct" },
          { y: 154, label: "Nov" },
          { y: 150, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "Guest",
        showInLegend: true,
        dataPoints: [
          { y: 172, label: "Jan" },
          { y: 173, label: "Feb" },
          { y: 175, label: "Mar" },
          { y: 172, label: "Apr" },
          { y: 162, label: "May" },
          { y: 165, label: "Jun" },
          { y: 172, label: "Jul" },
          { y: 168, label: "Aug" },
          { y: 175, label: "Sept" },
          { y: 170, label: "Oct" },
          { y: 165, label: "Nov" },
          { y: 169, label: "Dec" },
        ],
      },
    ],
  };

  return (
    <div className="linechart">
      <div className="heading-activites">
        <h1>Activities</h1>
        <select>
          <option value={["Jan", "Feb", "Mar", "Apr"]}>Jan-Apr</option>
          <option value={["May", "Jun", "Jul", "Aug"]}>May-Aug</option>
          <option value={["Sep", "Oct", "Nov", "Dec"]}>Sep-Dec</option>
        </select>
      </div>

      <CanvasJSChart options={options} />
    </div>
  );
};

export default LineChart;
