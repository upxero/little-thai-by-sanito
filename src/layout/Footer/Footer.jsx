import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { footerAnimation, scrollUpBtn, scrollUpShow } from "../../helper/main";
import { WhiteButton } from "../../components/Button/Button";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

import footerBg from "/assets/img/bg/footer_bg.png";
import elegenciaLogo from "/assets/img/logo/logo.png";

const Footertext = {
  email: "littlethaibysanito@gmail.com",
  phoneone: "Phone",
  phonetwo: "+32 (0) 473 17 51 16",
  addressone: "Address",
  addresstwo: "Bolivarplaats 2, 2000 Antwerpen",

  timeone: "Dinner: Wed – Sun — 18:00 - 23:00",
  timetwo: "Lunch Friday — 12:00 - 14:30 | Lunch Saturday — 13:00 - 15:30",
  timethree: "Closed: Monday & Tuesday",

  copyright: "Copyright 2026 - Little Thai By Sanito",
};

const Footernav = [
  { title: "Home", link: "/", key: "home" },
  { title: "About", link: "/about", key: "about" },
  { title: "Menu", link: "/menu", key: "menu" },
  { title: "Contact", link: "/contact", key: "contact" },
  { title: "Gallery", link: "/gallery", key: "gallery" }
];

export default function Footer() {
  const scrollup = useRef();
  const footerContainer = useRef(null);
  const footerHrTop = useRef(null);
  const footerHrBottom = useRef(null);
  const footerTimeBorder = useRef(null);

  useLayoutEffect(() => {
    footerAnimation(
      footerContainer.current,
      footerHrTop.current,
      footerHrBottom.current,
      footerTimeBorder.current
    );
    scrollUpShow(scrollup.current);
  }, []);

  return (
    <footer>
      <div className="ak-height-150 ak-height-lg-150"></div>
      <div className="ak-footer ak-style-1">
        <img className="ak-bg footer-bg-img" src={footerBg} />
        <div className="container ak-hr-container" ref={footerContainer}>
          <div className="ak-braner-logo type-color-1 footer-logo">
            <div
              className="footer-log-elem"
              ref={scrollup}
              onClick={() => scrollUpBtn()}
            >
              <div className="footer-log-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                >
                  <path
                    d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <img src={elegenciaLogo} alt="Little Thai By Sanito logo" />
              <p
              style={{
                color: "#fff",
                fontSize: "14px",
                marginTop: "8px",
                textAlign: "center",
                fontStyle: "italic",
                letterSpacing: "1px",
              }}
            >
             - Wings of Siam Elegance -
            </p>
            </div>
          </div>

          <div className="ak-height-100 ak-height-lg-60"></div>
          <div className="ak-footer-hr-top" ref={footerHrTop}></div>

          <div className="footer-main">
            <div className="footer-eamil-menu">
              <div className="footer-email">
                <a
                  href="mailto:littlethaibysanito@gmail.com"
                  style={{ fontSize: "20px", wordBreak: "break-all" }}
                >
                  {Footertext.email}
                </a>
              </div>
              <div className="footer-menu">
                <ul>
                  {Footernav.map((item) => (
                    <li key={item.key}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ak-height-75 ak-height-lg-5"></div>

            <div
              className="footer-info"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "30px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              {/* Phone */}
              <div
                style={{
                  flex: "1 1 200px",
                  minWidth: "200px",
                  color: "#fff",
                }}
              >
                <a
                  href="tel:+32473175116"
                  style={{
                    display: "block",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "15px",
                    marginBottom: "6px",
                  }}
                >
                  {Footertext.phoneone}
                </a>
                <a
                  href="tel:+32473175116"
                  style={{
                    display: "block",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  {Footertext.phonetwo}
                </a>
              </div>

              {/* Address */}
              <div
                style={{
                  flex: "1 1 250px",
                  minWidth: "220px",
                  color: "#fff",
                  lineHeight: "1.5",
                }}
              >
                <a
                  href="https://maps.app.goo.gl/vdbgLVtuSSNnmgxLA"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {Footertext.addressone}
                  <br />
                  {Footertext.addresstwo}
                </a>
              </div>

              {/* Time */}
              <div
                style={{
                  flex: "1 1 280px",
                  minWidth: "240px",
                  color: "#fff",
                  lineHeight: "1.4",
                }}
              >
                <p style={{ margin: "0 0 6px" }}>{Footertext.timeone}</p>
                <div
                  ref={footerTimeBorder}
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    margin: "6px 0",
                  }}
                ></div>
                <p style={{ margin: "0 0 6px" }}>{Footertext.timetwo}</p>
                <p
                  style={{
                    color: "#cfcfcf",
                    fontSize: "13px",
                    fontStyle: "italic",
                    marginTop: "8px",
                  }}
                >
                  {Footertext.timethree}
                </p>
              </div>

              {/* Reservations Button */}
              <div
                style={{
                  flex: "1 1 200px",
                  minWidth: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <WhiteButton to="/reservations">Reservations</WhiteButton>
              </div>
            </div>
          </div>

          <div
            className="ak-footer-hr-bottom qodef-grid-item"
            ref={footerHrBottom}
          ></div>

          <div className="ak-height-130 ak-height-lg-30"></div>

          <div className="copy-right-section">
            <p className="text-uppercase text-md-center text-white">
              {Footertext.copyright}
            </p>

            <p
              style={{
                color: "#fff",
                fontSize: "13px",
                marginTop: "4px",
                textAlign: "center",
                opacity: 0.9,
              }}
            >
              Made with <span style={{ color: "#ff4f4f" }}>❤️</span> by{" "}
              <a
                href="https://www.upxero.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                Upxero
              </a>
            </p>

            <SocialLinks />
          </div>

          <div className="ak-height-45 ak-height-lg-30"></div>
        </div>
      </div>
    </footer>
  );
}
