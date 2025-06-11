import React, { useState } from "react";

const Hero = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    let newTodo = {
      id: todo.length + 1,
      title: name,
      price: price,
      url: url,
    };
    let res = [...todo, newTodo];
    setTodo(res);
  };

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="url..."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="favorite styled"
            type="button"
            onClick={() => addTodo()}
          >
            Add
          </button>
        </div>
        <div className="block">
          {todo.map((el, idx) => (
            <div className="block1" key={idx}>
              <h1>{el.title}</h1>
              <h1>{el.price}</h1>
              <img src={el.url} alt="img" width={150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
