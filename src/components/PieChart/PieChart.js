import React, { Component } from 'react'
import './PieChart.css'
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class PieChart extends Component {
    render() {
		const options = {
			animationEnabled: true,
			data: [{
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
