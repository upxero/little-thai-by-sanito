import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBarAnnouncement() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  const barStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#111111",        // solide achtergrond
    color: "#ffffff",
    padding: "14px 20px",
    fontSize: "17px",                   // grotere tekst
    fontWeight: 600,
    textAlign: "center",
    zIndex: 9999,                       // hoger dan header
    borderBottom: "2px solid #D4AF37",

    // FIX zodat de achtergrond NOOIT doorzichtig wordt
    WebkitBackdropFilter: "none",
    backdropFilter: "none",
  };

  const closeBtn = {
    position: "absolute",
    right: "16px",
    top: "8px",
    background: "transparent",
    border: "none",
    color: "#D4AF37",
    fontSize: "26px",      // groter kruisje
    fontWeight: "bold",
    cursor: "pointer",
    lineHeight: 1,
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          style={barStyle}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <button style={closeBtn} onClick={() => setOpen(false)}>
            ×
          </button>

          <strong style={{ color: "#D4AF37" }}>
            Extra open on Sunday 14, 21 & 28 December
          </strong>{" "}
          from 17:00–23:00 — only in December
        </motion.div>
      )}
    </AnimatePresence>
  );
}
