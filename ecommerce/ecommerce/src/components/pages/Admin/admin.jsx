import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const nav = useNavigate();

  const adminRegister = () => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      name,
      email,
      phone,
      password,
    };

    const updatedUsers = [...savedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(newUser);
    alert("Катталдыңыз!");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    nav("/login");
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <a href="#">
            <FaRegCircleUser />
          </a>
          <input
            type="text"
            placeholder="Name:"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Mobile No.:"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <input
            type="text"
            placeholder="Password:"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={() => adminRegister()}>click me</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
