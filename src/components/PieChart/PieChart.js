import React, { Component } from 'react'
import './PieChart.css'
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class PieChart extends Component {
    render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Top Products"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 55, label: "Basic Tees" },
					{ y: 31, label: "Custom Short Pants" },
					{ y: 14, label: "Super Hoodies" },
				]
			}]
		}
		return (
		<div className='piechart'>
			<CanvasJSChart options = {options}
			/>
		</div>
		);
	}
}
