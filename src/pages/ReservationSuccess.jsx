import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/img/logo/logo.png";

export default function ReservationSuccess() {
  
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17973625783/vTj-CJ3p_f0bELeHv_pC'
      });
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <img src={logo} alt="Little Thai By Sanito" style={{ maxWidth: "200px", marginBottom: "30px" }} />
      <h2>Thank you! Your reservation has been sent.</h2>
      <p>We look forward to seeing you soon!</p>
      <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
        Back to Home
      </Link>
    </div>
  );
}
