import React from "react";

export default function StickyReserveButton() {

  const handleClick = () => {
    // 🔥 Google Ads tracking (optioneel)
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17973625783/vTj-CJ3p_f0bELeHv_pC'
      });
    }

    // 🔥 Open Zenchef booking
    window.open(
      "https://bookings.zenchef.com/results?rid=384441",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,

        backgroundColor: "#242525",
        color: "#fff",
        border: "2px solid #d4af37",
        borderRadius: "50px",

        padding: "14px 22px",
        fontSize: "16px",
        fontWeight: "600",

        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        cursor: "pointer",

        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
      }}
    >
      Reserveer nu
    </button>
  );
}