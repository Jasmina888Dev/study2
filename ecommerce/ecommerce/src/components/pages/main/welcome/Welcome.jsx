import React from "react";
import "./Welcome.scss";
import headphones from "../../../../assets/images/headphones.svg";
import music from "../../../../assets/images/welcome.svg";
import { BiBadgeCheck } from "react-icons/bi";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <h1>Enjoy Every</h1>
        <div className="welcome">
          <div className="welcome--left">
            <img src={music} alt="img" />
            <div className="welcome--left__contentTop">
              <h2>20 hour</h2>
              <h6>battery life</h6>
            </div>
            <div className="welcome--left__content">
              <h2>8 level</h2>
              <h6>noise cancellation</h6>
            </div>
            <div className="welcome--left__content">
              <h6>Rs. 15,999</h6>
              <h2>Rs. 9,999</h2>
            </div>
          </div>
          <img src={headphones} alt="img" />
          <div className="welcome--right">
            <img src={music} alt="img" />
            <div className="welcome--right__contentTop">
              <h2>5-mode</h2>
              <h6>touch control</h6>
            </div>
            <div className="welcome--right__content">
              <h2>20 min</h2>
              <h6>fast charge</h6>
            </div>
            <div className="welcome--right__content">
              <h6>
                <BiBadgeCheck />1 year
              </h6>
              <h2>warranty</h2>
            </div>
          </div>
        </div>
        <div className="welcomeBtns">
          <button className="welcomeBtns--left">Buy Now</button>
          <button className="welcomeBtns--right">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
