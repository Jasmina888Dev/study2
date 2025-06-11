import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";

const ProductForm = () => {
  const [proName, setProName] = useState("");
  const [proUrl, setProUrl] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proRating, setProRating] = useState("");

  const productSubmit = () => {
    if (!user) {
      alert("Адегенде кирүү керек!");
      return;
    }

    const newProduct = {
      name: proName,
      url: proUrl,
      price: proPrice,
      rating: proRating,
    };

    axios.post(
      `https://api-crud.elcho.dev/api/v1/299a2-8560a-707b6/register`,
      newProduct
    );
    alert("Продукт жүктөлдү!");
    setName("");
    setUrl("");
    setPrice("");
    setRating("");
  };

  return (
    <div id="productForm">
      <div className="container">
        <div className="productForm">
          <h2>Load the products.</h2>
          <input
            type="text"
            placeholder="Product url"
            onChange={(e) => setProUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product name"
            onChange={(e) => setProName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product price"
            onChange={(e) => setProPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product rating"
            onChange={(e) => setProRating(e.target.value)}
          />
          <button onClick={productSubmit}>click me</button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
