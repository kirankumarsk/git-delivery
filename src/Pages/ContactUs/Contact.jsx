import React, { useContext } from "react";
import { AuthContext } from "../../Context/ContextData";
import logo from "../../Assets/Logo/logo-r.png";
import fb from "../../Assets/Logo/facebook.png";
import linkedin from "../../Assets/Logo/linkedin.png";
import insta from "../../Assets/Logo/instagram.png";
import whatsapp from "../../Assets/Logo/whatsapp.png";
import address from "../../Assets/Logo/adress.png";
import call from "../../Assets/Logo/call.png";
import email from "../../Assets/Logo/email.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="flex lg:flex-row flex-col-reverse  max-w-[1440px] mx-auto w-full px-4 py-5 justify-center">
          <div className="pt-10 lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4986.374518120679!2d75.80038218707283!3d13.336882297705092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710410009073!5m2!1sen!2sin"
              title="map"
              width="100%"
              height="600px"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col items-center w-full pt-10">
              <h1 className="text-[30px] font-semibold text-[#002366]">
                Head Office Address
              </h1>
              <img src={logo} alt="" className="w-[200px]" />
              <div className="flex gap-3">
                <Link to="https://www.facebook.com" target="_blank">
                  <img src={fb} alt="" className="w-[30px]" />
                </Link>
                <Link
                  to="https://www.linkedin.com"
                  target="_blank"
                >
                  <img src={linkedin} alt="" className="w-[30px]" />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                >
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
                <div className="flex items-center gap-3 text-[14px]">
                  <img src={address} alt="" className="w-[25px]" />
                  <p>
                    65/3, Redfort, <br />
                    Noida, Delhi-1214,India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-[1150px] md:h-[1100px] h-[1450px]">
            <iframe
              src="https://form.jotform.com/240732363382454"
              title="Enquire Now"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      ) : (
        <div>
          </div>
      )}
    </div>
  );
};

export default Contact;
