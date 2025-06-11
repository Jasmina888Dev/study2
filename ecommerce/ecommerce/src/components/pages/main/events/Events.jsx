import React from "react";
import "./Events.scss";
import { TbTruckDelivery } from "react-icons/tb";
import { BiBookmarkAltMinus } from "react-icons/bi";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

const Events = () => {
  return (
    <div id="events">
      <div className="container">
        <div className="events">
          <div className="events--card">
            <a href="#">
              <TbTruckDelivery />
            </a>
            <h1>Free Shipping</h1>
          </div>
          <div className="events--card">
            <a href="#">
              <BiBookmarkAltMinus />
            </a>
            <h1>GST Billing</h1>
          </div>
          <div className="events--card">
            <a href="#">
              <MdOutlineSettingsBackupRestore />
            </a>
            <h1>7-Day Replacement</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
