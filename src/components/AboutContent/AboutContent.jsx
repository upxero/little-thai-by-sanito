import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { ButtonCommon } from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { borderAnimation, imageZoomInOut } from "../../helper/main";

const about_content = {
  title: "Culinary Art",
  textWhite: "Exquisite Thai Dining Experience",
  images: [
    "/assets/img/about/about_bg.jpg",
    "/assets/img/about/about_bg2.jpg",
  ],
  subtext:
    "At LittleThaiBySanito, each dish is a journey of flavors, blending traditional Thai recipes with a touch of modern artistry.",
  details:
    "Created by Sanito Sathip Sangwisit, our kitchen transforms authentic Thai ingredients into elegant and flavorful dishes. Every creation reflects passion, culture, and a true love for Thai cuisine.",
};

const { title, textWhite, images, subtext, details } = about_content;

export default function AboutContent() {
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);
  const borderAbout = useRef(null);

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Wissel afbeelding elke 5 seconden
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
    borderAnimation(borderAbout.current, 2, 13);
  }, []);

  return (
    <section className="ak-about-bg-color" ref={imageContainer}>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-about ak-style-1">
        <div className="ak-about-bg-img ak-bg">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="About LittleThaiBySanito"
            ref={imageZoomIn}
            style={{
            transition: "opacity 1.5s ease-in-out",
            width: "100%",
            height: window.innerWidth < 768 ? "550px" : "100%",
            objectFit: "cover",
            objectPosition: "center",
            transform: "none",
          }}
          />
        </div>
        <div className="ak-about-hr" ref={borderAbout}></div>
        <div className="container">
          <div className="about-section ak-about-1">
            <div className="about-text-section">
              <SectionTitle title={title} textWhite={textWhite} />

              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{details}</p>
              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{subtext}</p>
              <div className="ak-height-50 ak-height-lg-30"></div>
              <ButtonCommon to={"/about"}>Discover The Kitchen</ButtonCommon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
