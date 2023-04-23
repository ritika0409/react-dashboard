import React, { Component } from "react";
import "./PieChart.css";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const PieChart = () => {
  const options = {
    animationEnabled: true,
    data: [
      {
        type: "pie",
        showInLegend: "true",
        legendText: "{label}: {y}%",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        dataPoints: [
          { y: 55, label: "Basic Tees" },
          { y: 31, label: "Custom Short Pants" },
          { y: 14, label: "Super Hoodies" },
        ],
      },
    ],
  };
  return (
    <div className="piechart">
      <div className="heading">
        <h1>Top Products</h1>
        <select>
          <option value={["Jan", "Feb", "Mar", "Apr"]}>Jan-Apr</option>
          <option value={["May", "Jun", "Jul", "Aug"]}>May-Aug</option>
          <option value={["Jan", "Feb", "Mar", "Apr"]}>Sep-Dec</option>
        </select>
      </div>
      <CanvasJSChart options={options} />
    </div>
  );
};
export default PieChart;
