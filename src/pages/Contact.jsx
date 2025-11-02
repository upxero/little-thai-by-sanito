import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CommonHero from "../components/CommonHero/CommonHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import CommentConatctFrom from "../components/Comment/CommentConatctFrom";

export default function Contact() {
  return (
    <>
      <CommonHero title={"Contact Us"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <div className="contact-content">
          <div className="contact-form">
            <div className="contact-form-title ">
              <SectionTitle animTwo={true} textWhite={"Contact Us"} />
            </div>
            <CommentConatctFrom />
          </div>
          <div className="contact-map">
            <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.8083644372873!2d4.385407375584327!3d51.20418273281036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6953d854243%3A0x830ba139d0b94ae1!2sBolivarplaats%2C%20Antwerpen%2C%20Belgi%C3%AB!5e0!3m2!1snl!2sth!4v1762089259313!5m2!1snl!2sth" />
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
    </>
  );
}
