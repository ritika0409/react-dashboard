import React, { Component } from "react";
import "./StatCards.css";
import { cardData } from "../../data/CardsData";
const StatCards = () => {
  return (
    <div className="cards">
      {cardData.map((item) => {
        return (
          <div className="card" style={{ backgroundColor: item.color }}>
            <p>{item.title}</p>
            <div className="icons">{item.icon}</div>
            <p className="value">{item.numeric}</p>
          </div>
        );
      })}
    </div>
  );
};
export default StatCards;
