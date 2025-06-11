import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--right">
            <div className="header--right__content">
              <a href="#">
                <FaLocationDot />
              </a>
              <h1>Ваш город: Константинополь</h1>
              <h3>
                <BiChevronDown />
              </h3>
            </div>

            <h1>
              <span>
                <FaLocationDot />
              </span>
              Наш офис: Москва, ул. Новокосимская д.7
            </h1>
          </div>

          <div className="header--left">
            <h2>Статьи</h2>
            <h2>Оплата</h2>
            <h2>Гарантия</h2>
            <h2>Дилерам</h2>
            <h2>Вакансии</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
