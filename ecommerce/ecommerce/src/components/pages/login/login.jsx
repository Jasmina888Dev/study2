import React, { useState, useContext } from "react";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const nav = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (el) => el.email === email && el.password === password
    );

    if (user) {
      setUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Сиз кирдиңиз!");
      nav("/productForm");
    } else {
      alert("Email же пароль туура эмес!");
    }
  };

  return (
    <div id="login">
      <div className="container">
        <div className="login">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Кирүү</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
