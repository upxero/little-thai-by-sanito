import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import announcementImg from "/assets/img/bg/muay.jpg";

export default function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 7000); // sluit automatisch na 7s
    return () => clearTimeout(timer);
  }, []);

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.25)",
    zIndex: 40,
  };

  const wrapperStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  };

  const boxStyle = {
    width: "500px", 
    height: "300px",
    background: "#111111",
    color: "#fff",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
    border: "2px solid #D4AF37",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    pointerEvents: "auto",
    boxSizing: "border-box",
    position: "relative",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "2px solid #D4AF37",
    marginBottom: "10px",
  };

  const titleStyle = {
    color: "#D4AF37",
    fontSize: "16px",
    fontWeight: 700,
    margin: "0 0 6px 0",
    lineHeight: "1.2",
  };

  const textStyle = {
    color: "#ffffff",
    fontSize: "13px",
    margin: 0,
    lineHeight: "1.3",
  };

  const smallNoteStyle = {
    color: "#cfcfcf",
    fontSize: "11px",
    marginTop: "8px",
    fontStyle: "italic",
  };

  const closeStyle = {
    position: "absolute",
    top: "6px",
    right: "8px",
    background: "transparent",
    border: "none",
    color: "#D4AF37",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            style={overlayStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            style={wrapperStyle}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div style={boxStyle}>
              <button
                aria-label="Close announcement"
                onClick={() => setIsOpen(false)}
                style={closeStyle}
              >
                ×
              </button>

              <img src={announcementImg} alt="Thai" style={imgStyle} />

              <h3 style={titleStyle}>Little Thai By Sanito</h3>

              <p style={textStyle}>
                Opens <br />
                <strong style={{ color: "#D4AF37" }}>
                  Tuesday, 18 November 2025
                </strong>
              </p>

              <p style={smallNoteStyle}>Website still under decoration</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
