import React from "react";
import "./HelpCentre.scss";
import centre from "../../../../assets/images/centre.svg";

const HelpCentre = () => {
  return (
    <div id="helpCentre">
      <div className="container">
        <h1>HELP CENTRE</h1>
        <div className="helpCentre">
          <div className="helpCentre--content">
            <div className="helpCentre--content__block">
              <h2>Track Your Order</h2>
            </div>
            <div className="helpCentre--content__block">
              <h2>Return Policy</h2>
            </div>
            <div className="helpCentre--content__block">
              <h2>Service Centres</h2>
            </div>
            <div className="helpCentre--content__block">
              <h2>Return Policy</h2>
            </div>
          </div>
          <img src={centre} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default HelpCentre;
