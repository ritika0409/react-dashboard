import React, { Component } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import StatCards from '../../components/StatCards/StatCards'
import LineChart from '../../components/LineChart/LineChart'
import PieChart from '../../components/PieChart/PieChart'
import Schedule from '../../components/Schedule/Schedule'

export default class 
 extends Component {
  render() {
    return (
      <div className='home'>
        <Sidebar/>
        <div className='content1'>
            <Navbar/>
            <StatCards/>
            <LineChart/>
            <div className='content2'>
              <PieChart/>
              <Schedule/>
            </div>
        </div>
      </div>
    )
  }
}
