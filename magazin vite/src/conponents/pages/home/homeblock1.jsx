import React from "react";
import { BiCheck } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Homeblock1 = () => {
  return (
    <div id="homeblock1">
      <div className="container">
        <div className="homeblock1">
          <div className="homeblock1--content1">
            <div className="homeblock1--content1__text"></div>
            <div className="homeblock1--content1__text"></div>
            <div className="homeblock1--content1__text"></div>
            <h3>Логотип вашего магазина</h3>
          </div>
          <div className="homeblock2--content2">
            <div className="homeblock1--content2__text2">
              <h3>
                <span>
                  {" "}
                  <BiCheck />
                </span>
                Лучшие цены
              </h3>
              <h3>
                <span>
                  {" "}
                  <BiCheck />
                </span>
                Бесплатная доставка
              </h3>
              <h3>
                <span>
                  {" "}
                  <BiCheck />
                </span>
                Гарантия от 3х лет
              </h3>
              <h3>
                <span>
                  {" "}
                  <BiCheck />
                </span>
                Более 1 000 товаров
              </h3>
            </div>
            <div className="homeblock1--content2__text22">
              <input type="text" placeholder="Поиск по каталогу..." />
              <button>Найти</button>
            </div>
          </div>
          <div className="homeblock3--content3">
            <div className="homeblock1--content3__text3">
              <h3>
                <span>
                  <IoTimeOutline />
                </span>
                Ежедневно с 9:00 до 21:00
              </h3>
              <h2>
                8 (800){" "}
                <span
                  style={{
                    color: "black",
                  }}
                >
                  800-00-00
                </span>
              </h2>
              <h2>
                8 (495){" "}
                <span
                  style={{
                    color: "black",
                  }}
                >
                  700-00-00
                </span>
              </h2>
            </div>
            <div className="homeblock1--content3__text33">
              <h3>
                <span>
                  <MdOutlineMailOutline />
                </span>
                youremail@mailbox.ru
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeblock1;
