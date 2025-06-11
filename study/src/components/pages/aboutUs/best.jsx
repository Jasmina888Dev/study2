import React, { useEffect, useState } from "react";
import image1 from "../../../assets/images/image1.png";
import axios from "axios";

const Best = () => {
  const [best, setBest] = useState([]);

  async function getBest() {
    let res = await axios(`http://13.61.25.99/en/about/`);
    setBest(res.data);
    console.log(best, "best");
  }

  useEffect(() => {
    getBest();
  }, []);

  // 13.61.25.99/en/about/

  return (
    <div id="best">
      <div className="container">
        <div className="best">
          <div className="best--images">
            <img src={image1} alt="" />
          </div>
          <div className="best--title">
            <h2>About Us</h2>
            <h1>Best Education Platform</h1>
            <h3>
              Apparently we had reached a great height in <br /> the atmosphere,
              for the sky was a dead black.
            </h3>
            <p>
              By the same illusion which lifts the horizon of the sea to <br />{" "}
              the level of the spectator on a hillside, the sable cloud <br />{" "}
              beneath was dished out, and the car seemed to float in <br /> the
              middle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
