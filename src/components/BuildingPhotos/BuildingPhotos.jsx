import React, { useEffect, useState } from "react";

export default function BuildingPhotos() {
  const [imgHeight, setImgHeight] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 250 : 350
  );

  useEffect(() => {
    function handleResize() {
      setImgHeight(window.innerWidth < 768 ? 250 : 350);
    }
    window.addEventListener("resize", handleResize);
    // initial check in case SSR or first paint differs
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    padding: "0 20px",
  };

  const wrapperStyle = {
    flex: "1 1 45%",
    maxWidth: "600px",
    width: "100%",
    height: `${imgHeight}px`,
    overflow: "hidden",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.6s ease",
  };

  const imgHoverStyle = {
    transform: "scale(1.04)",
  };

  // optional: simple hover effect (works with inline style by toggling on mouse events)
  const [hovered, setHovered] = useState(null);

  return (
    <section style={containerStyle}>
      <div
        style={wrapperStyle}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src="/assets/img/building/building1.jpg"
          alt="Little Thai by Sanito - Exterior"
          style={{
            ...imgStyle,
            ...(hovered === 1 ? imgHoverStyle : {}),
          }}
        />
      </div>

      <div
        style={wrapperStyle}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src="/assets/img/building/building2.jpg"
          alt="Little Thai by Sanito - Entrance"
          style={{
            ...imgStyle,
            ...(hovered === 2 ? imgHoverStyle : {}),
          }}
        />
      </div>
    </section>
  );
}
