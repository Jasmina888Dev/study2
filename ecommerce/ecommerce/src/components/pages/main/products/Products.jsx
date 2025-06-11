import React from "react";
import "./Products.scss";
import pro1 from "../../../../assets/images/pro1.svg";
import pro2 from "../../../../assets/images/pro2.svg";
import pro3 from "../../../../assets/images/pro3.svg";

const Products = () => {
  return (
    <div id="products">
      <div className="container">
        <div className="products">
          <h1>PRODUCTS</h1>
          <div className="products--block">
            <h2>Wireless Headphones</h2>
            <img src={pro1} alt="img" className="products--block__pro1" />
          </div>
          <div className="products--block">
            <h2>True Wireless Earbuds</h2>
            <img src={pro2} alt="img" className="products--block__pro2" />
          </div>
          <div className="products--block">
            <h2>Wireless Speakers</h2>
            <img src={pro3} alt="img" className="products--block__pro3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
