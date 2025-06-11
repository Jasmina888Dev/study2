import React from "react";
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { dark } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>header</h1>
          <div className="header--nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            {dark ? (
              <a href="#" onClick={() => dispatch({ type: "LIGHT" })}>
                <CiLight />
              </a>
            ) : (
              <a href="#" onClick={() => dispatch({ type: "MOON" })}>
                {" "}
                <LuSunMoon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
