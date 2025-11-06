import React from "react";

const movingText = [
  {
    white: "Discover the authentic taste of Thailand ",
    yellow: "with Sanito's signature style",
  },
  {
    white: "Savor vibrant Thai flavors ",
    yellow: "in every refined dish",
  },
  {
    white: "Where culinary tradition ",
    yellow: "meets modern elegance",
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

