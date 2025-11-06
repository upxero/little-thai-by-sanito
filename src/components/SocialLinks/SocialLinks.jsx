import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links" style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
      <a
        href="https://www.facebook.com/littlethaibysanito"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF size={22} color="white" />
      </a>
      <a
        href="https://www.instagram.com/littlethaibysanito"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={22} color="white" />
      </a>
    </div>
  );
}
