import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { cash } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  function addPrice() {
    if (cash >= 5000) {
      alert(404);
    } else {
      dispatch({ type: "ADD_MONEY", payload: price });
    }
    setPrice("");
  }
  function addMoney() {
    if (cash >= 5000) {
      alert(404);
    } else {
      dispatch({ type: "ADD_MONEY", payload: 500 });
    }
  }

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--form">
            <input
              type="text"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />{" "}
            <button onClick={() => addPrice()}>click</button>
          </div>
          <button onClick={() => addMoney()}>ADD</button>
          <h1>{cash}$</h1>
          <button onClick={() => dispatch({ type: "TAKE_MONEY" })}>TAKE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
