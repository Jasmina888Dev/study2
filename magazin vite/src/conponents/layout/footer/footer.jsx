import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { SlSocialYoutube } from "react-icons/sl";
import visa from "../../../assets/images/VISA.svg";
import vector from "../../../assets/images/Vector.svg";
import maestro from "../../../assets/images/MAESTRO.svg";
import maestroCard from "../../../assets/images/MASTERCARD.svg";
import orig from "../../../assets/images/orig.png";
import mir from "../../../assets/images/mir.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--top">
            <div className="footer--top__right">
              <div className="footer--top__right--blocks">
                <div className="footer--top__right--blocks__btn">
                  <button className="btn1"></button>
                  <button className="btn2"></button>
                  <button className="btn3"></button>
                </div>
                <h3>Логотип вашего магазина</h3>
              </div>
              <h3>
                Наш адрес: <br /> Москва, ул. Новокосимская д.7
              </h3>
            </div>
            <div className="footer--top__left">
              <h3>
                График работы: <br />
                Ежедневно с <span>9:00</span> до <span>21:00</span>
              </h3>
              <button>Заказать звонок</button>
            </div>
          </div>
          <div className="footer--center">
            <div className="footer--center__right">
              <div className="footer--center__right--text1">
                <h2>Для покупателей:</h2>
                <h4>Доставка</h4>
                <h4>Гарантия</h4>
                <h4>Политика конфиденциальности</h4>
                <h4>Отзывы</h4>
                <h4>Наши работы</h4>
              </div>
              <div className="footer--center__right--text2">
                <h2>О компании:</h2>
                <h4>О Нас</h4>
                <h4>Доставка и оплата</h4>
                <h4>Наши работы</h4>
                <h4>Контакты</h4>
                <h4>Гарантия</h4>
              </div>
              <div className="footer--center__right--text3">
                <h2>Категории:</h2>
                <h4>Беседки</h4>
                <h4>Бани</h4>
                <h4>Площадки</h4>
                <h4>Дома</h4>
                <h4>Перголы</h4>
                <h4>Бренды</h4>
              </div>
            </div>
            <div className="footer--center__left">
              <div className="footer--center__left--block1">
                <h4>
                  Для регионов <br />
                  (звонок бесплатный)
                </h4>
                <h1>
                  8 (800){" "}
                  <span
                    style={{
                      color: "rgba(255, 122, 27, 1)",
                    }}
                  >
                    800-00-00
                  </span>
                </h1>
                <h4>Email: youremail@mailbox.ru</h4>
                <h4>Мы в соц.сетях:</h4>
                <div className="footer--center__left--block1__icons">
                  <a href="#">
                    <IoLogoWhatsapp />
                  </a>
                  <a href="#">
                    <SlSocialYoutube />
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255, 122, 27, 1)",
                    }}
                  >
                    <IoLogoInstagram />
                  </a>
                </div>
              </div>
              <div className="footer--center__left--block2">
                <h4>
                  Для Москвы <br /> и Московской области
                </h4>
                <h1>
                  8 (495){" "}
                  <span
                    style={{
                      color: "rgba(255, 122, 27, 1)",
                    }}
                  >
                    700-00-00
                  </span>
                </h1>
                <h4>Сообщить об ошибке на сайте</h4>
                <h4>
                  ООО "Фаза Групп" <br /> ИНН: 7751140879 <br /> ОГРН:
                  1187746273461
                </h4>
              </div>
            </div>
          </div>
          <div className="footer--bottom">
            <div className="footer--bottom__right">
              <h4>
                Публичная оферта <br /> 2013-2021 - Товары для дач, <br />{" "}
                деревянные конструкции под любые нужды
              </h4>
            </div>
            <div className="footer--bottom__left">
              <h4>Принимаем к оплате:</h4>
              <img src={visa} alt="img" />
              <img src={vector} alt="img" />
              <img src={maestro} alt="img" />
              <img src={maestroCard} alt="img" />
              <img src={orig} alt="img" width={100} />
              <img src={mir} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
