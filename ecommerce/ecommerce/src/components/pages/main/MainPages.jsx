import React from "react";
import Welcome from "./welcome/Welcome";
import Products from "./products/Products";
import Events from "./events/Events";
import HelpCentre from "./helpCentre/HelpCentre";

const MainPages = () => {
  return (
    <>
      <Welcome />
      <Products />
      <Events />
      <HelpCentre />
    </>
  );
};

export default MainPages;
