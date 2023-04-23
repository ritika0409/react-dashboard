import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatCards from "../../components/StatCards/StatCards";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import Schedule from "../../components/Schedule/Schedule";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="content1">
        <Navbar />
        <StatCards />
        <LineChart />
        <div className="content2">
          <PieChart />
          <Schedule />
        </div>
      </div>
    </div>
  );
};
export default Home;
