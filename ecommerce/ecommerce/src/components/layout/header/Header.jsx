import React, { useContext, useState } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { UserContext } from "../../context/context";

const Header = () => {
  const { user } = useContext(UserContext);

  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className=""></div>
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Products</Link>
            <Link to={"/"}>Help Centre</Link>
            {/* <nav>
              <Link to="/">Home</Link>
              {user && (
                <Link to="/add-product">Add Product</Link> 
              )}
              {!user && <Link to="/login">Login</Link>}
            </nav> */}
            <h2 onClick={() => nav("/admin")}>
              <FaRegUserCircle />
            </h2>
          </div>
          <div className="header--search">
            <a href="#">
              <CiSearch />
            </a>
            <a href="#">
              <IoCartOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
