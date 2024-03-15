import React from "react";
import logo from "../../Assets/Logo/logo-r.png";
import fb from "../../Assets/Logo/facebook.png";
import linkedin from "../../Assets/Logo/linkedin.png";
import insta from "../../Assets/Logo/instagram.png";
import whatsapp from "../../Assets/Logo/whatsapp.png";
import address from "../../Assets/Logo/adress.png";
import call from "../../Assets/Logo/call.png";
import email from "../../Assets/Logo/email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#08331cca] items-center text-white ] top-[0px]">
      <aside>
        <img src={logo} alt="" className="w-[200px]" />
        <div className="flex gap-3">
          <Link to="https://www.facebook.com/" target="_blank">
            <img src={fb} alt="" className="w-[30px]" />
          </Link>
          <Link
            to="https://www.linkedin.com/"
            target="_blank"
          >
            <img src={linkedin} alt="" className="w-[30px]" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <img src={insta} alt="" className="w-[30px]" />
          </Link>
          <Link to="https://wa.me/+919380783813" target="_blank">
            <img src={whatsapp} alt="" className="w-[30px]" />
          </Link>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <div className="flex items-center gap-3 text-[14px]">
            <img src={email} alt="" className="w-[25px]" />
            <p>kirankumarsk25820@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 text-[14px]">
            <img src={call} alt="" className="w-[25px]" />
            <p>+919380783813</p>
          </div>
          <div className="flex justify-center items-center gap-3 text-[14px]">
            <img src={address} alt="" className="w-[25px]" />
            <p>
            65/3, Redfort, <br />
                    Noida, Delhi-1214,India
            </p>
          </div>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link to="/our-services" className="link link-hover">
          Packing & shifting Services
        </Link>
        <Link to="/our-services" className="link link-hover">
          Warehouse Operation Support Service
        </Link>
        <Link to="/our-services" className="link link-hover">
          Loading and Unloading Service
        </Link>
        <Link to="/our-services" className="link link-hover">
          Transportation Service
        </Link>
        <Link to="/our-services" className="link link-hover">
          Household Shifting
        </Link>
        <Link to="/our-services" className="link link-hover">
          Corporate Relocation Service in India
        </Link>
      </nav>
      <footer className="footer footer-center p-4 bg-[#660c002d] text-white">
        <aside>
          <p>Copyright © 2023 - All right reserved by K M&P</p>
          <p>
            Developed by{" "}
            <Link
              to="https://www.linkedin.com/in/kiran-kumar-s-k-b57819196"
              target="_blank"
              className="hover:text-red-600 underline"
            >
              Kiran Kumar S K
            </Link>
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
