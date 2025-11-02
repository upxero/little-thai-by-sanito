import React from "react";

const movingText = [
  {
    white: "Discover the art of Thai cuisine ",
    yellow: "crafted by Chef Sanito",
  },
  {
    white: "Savor flavors from Thailand ",
    yellow: "in every elegant dish",
  },
  {
    white: "Experience culinary tradition ",
    yellow: "meets modern luxury",
  },
];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-normal text-uppercase">
      <div className="ak-moving-section-in">
        {movingText?.map((text, i) => (
          <div className="ak-moving-section" key={i}>
            <h2>
              {text.white} <span>{text.yellow}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

