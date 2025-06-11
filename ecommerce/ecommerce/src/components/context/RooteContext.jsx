import React, { useState } from "react";
import { UserContext } from "./context";

const RooteContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [login, setLogin] = useState(null);
  return <UserContext.Provider value={{
    user, 
    setUser,
    login,
    setLogin,
  }}>
    {children}
  </UserContext.Provider>;
};

export default RooteContext;
