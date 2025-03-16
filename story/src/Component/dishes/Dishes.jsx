import React from "react";
import "./Dishes.css";

const TodayDishes = () => {
  return (
    <div className="dish-card">
      <div className="dish-header">
        <div className="title">
          <h2>Today Dishes</h2>
          <p>Tuesday, April 07</p>
        </div>
        <div className="menu-icon">🍽️</div>
      </div>

      <div className="dish-categories">
        <span className="active">Meat</span>
        <span> Desserts </span>
        <span> Soups </span>
        <span> Salads </span>
      </div>

      <div className="dish-image">
        <img
          src="https://source.unsplash.com/300x300/?grilled-steak"
          alt="Grilled Skirt Steak"
        />
      </div>

      <div className="dish-info">
        <h3>Grilled Skirt Steak</h3>
        <p>Sanjeev Kapoor, India</p>
        <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="dish-footer">
        <button className="nav-btn">🏠</button>
        <button className="nav-btn">🔍</button>
        <button className="nav-btn">🛒</button>
        <button className="nav-btn">👤</button>
      </div>
    </div>
  );
};

export default TodayDishes;
