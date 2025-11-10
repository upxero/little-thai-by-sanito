import React, { useLayoutEffect, useRef } from "react";
import CommonHero from "../components/CommonHero/CommonHero";
import FoodMenuItem from "../components/FoodMenu/FoodMenuItem";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { imageZoomInOut } from "../helper/main";
import foodmenulist from "../dataJson/foodmenulist.json";

export default function Menu() {
  const imageContainers = useRef([]);
  const imageZoomIns = useRef([]);

  // Zet dit op false om menu te verbergen
  const showMenu = true;

  useLayoutEffect(() => {
    if (showMenu) {
      foodmenulist.forEach((item, index) => {
        imageZoomInOut(
          imageContainers.current[index],
          imageZoomIns.current[index]
        );
      });
    }
  }, [showMenu]);

  return (
    <div>
      <CommonHero title={"Our Menu"} link={"/"} />
      <div style={{ textAlign: "center", marginTop: "30px", color: "#FFD28D" }}>
        <p style={{ fontSize: "1.1rem", fontStyle: "italic" }}>
          Menu still under construction — prices will be added soon.
        </p>
      </div>

      {!showMenu ? (
        // ✅ Coming Soon weergave
        <div
          style={{
            textAlign: "center",
            padding: "120px 20px",
            color: "#B75BAA",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Menu coming soon 🍽️
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            We’re crafting our new menu with love and authentic Thai flavors.
            Stay tuned!
          </p>
        </div>
      ) : (
        // ✅ Originele menu code (uitgeschakeld, blijft behouden)
        <>
          {foodmenulist?.map((item, i) => (
            <div
              key={i}
              className="set-bg-img-section"
              ref={(el) => (imageContainers.current[i] = el)}
            >
              <img
                src={`${item.bgImgShow}`}
                alt="..."
                className="imagesZoom bg-img ak-bg"
                ref={(el) => (imageZoomIns.current[i] = el)}
              />

              <div className="ak-height-150 ak-height-lg-60"></div>
              <div className="container">
                <SectionTitle
                  title={item.headingtext.title}
                  subTitle={item.headingtext.subTitle}
                  tyle={item.headingtext.tyle}
                />
                <div className="ak-height-65 ak-height-lg-30"></div>
                <div className="ak-menu-list">
                  {item.foodMenu?.map((food, index) => (
                    <FoodMenuItem key={index} data={food} />
                  ))}
                </div>
              </div>

              <div className="ak-height-150 ak-height-lg-0"></div>
              <div className="ak-height-150 ak-height-lg-60"></div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
