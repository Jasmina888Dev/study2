import React from "react";
import "./Footer.scss";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <h3>Let’s get Social</h3>
          <div className="footer--icons">
            <a href="#">
              <PiLinkedinLogoBold />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FcGoogle />
            </a>
            <a href="#">
              <AiOutlineYoutube />
            </a>
            <a href="#">
              <LiaFacebookSquare />
            </a>
          </div>
          <h3>Privacy Policy ● Terms & Conditions</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
