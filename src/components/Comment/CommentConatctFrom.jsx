import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div
      className="contact-info"
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        color: "#fff",
        backgroundColor: "#222", // donkere achtergrond
        borderRadius: "8px",
      }}
    >

      <p><FaPhoneAlt style={{ marginRight: "8px" }} /> +32 (0) 473 17 51 16</p>
      <p>
        <FaEnvelope style={{ marginRight: "8px" }} />
        <a href="mailto:littlethaibysanito@gmail.com" style={{ color: "#fff", textDecoration: "underline" }}>
          littlethaibysanito@gmail.com
        </a>
      </p>
      <p><FaMapMarkerAlt style={{ marginRight: "8px" }} /> Bolivarplaats 2, 2000 Antwerpen</p>
      
      <p><FaClock style={{ marginRight: "8px" }} /> Opening Hours:</p>
      <ul style={{ paddingLeft: "24px" }}>
        <li>Tue - Sat: 18:00 - 23:00</li>
        <li>Coming soon — Lunch on Wed, Thu & Fri: 12:00 - 14:30</li>
      </ul>
    </div>
  );
}
