import React from "react";
import { Link } from "react-router-dom";

const Block = ({text, title, btn}) => {
  return (
    <div className="block">
      <div className="container">
        <div className="w-[400px] h-[300px] bg-red-400 rounded-3xl p-[20px]">
          <h1>{text}</h1>
          <p className="text-xl">{title}</p>
          <Link to={"/"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Block;
