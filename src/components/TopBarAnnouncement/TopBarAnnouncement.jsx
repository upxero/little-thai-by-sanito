import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBarAnnouncement() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  const barStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#111111",
    color: "#ffffff",
    padding: "14px 20px",
    fontSize: "16px",
    fontWeight: 600,
    textAlign: "center",
    zIndex: 9999,
    borderBottom: "2px solid #D4AF37",
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
    fontSize: "26px",
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
            Closed for maintenance:
          </strong>{" "}
          Mon 5 Jan – Thu 8 Jan 2026.{" "}
          <strong style={{ color: "#D4AF37" }}>
            Reopen Fri 9 Jan
          </strong>{" "}
          (Lunch & Dinner). Extra open: Sun 10 & Mon 11 Jan.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
