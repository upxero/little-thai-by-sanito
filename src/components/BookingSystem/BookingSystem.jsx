import React, { useState } from "react";
import classNames from "classnames";
import { SubmitButton } from "../Button/Button";

export default function BookingSystem(props) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "Dinner",
    persons: "2",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (parseInt(inputs.persons) > 5) {
      alert("Sorry, a maximum of 5 people per table is allowed.");
      return;
    }

    const selectedDate = new Date(inputs.date);
    if (selectedDate.getMonth() !== 10) {
      alert("Reservations are only available for November.");
      return;
    }

    try {
      const res = await fetch("/.netlify/functions/send-reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      if (res.ok) {
        alert("Your reservation has been sent successfully!");
        setInputs({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "Dinner",
          persons: "2",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while sending your reservation.");
    }
  };

  const bookingStyle = classNames("booking-system-form", {
    "style-2": props?.styleTwo,
  });

  // Inline CSS - transparante stijl
  const formContainerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px 0",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "14px",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "6px",
    background: "transparent",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
  };
  const selectStyle = { ...inputStyle, appearance: "none" };
  const textareaStyle = {
    ...inputStyle,
    minHeight: "90px",
    resize: "vertical",
  };
  const labelStyle = {
    marginBottom: "6px",
    display: "block",
    fontWeight: "500",
    color: "#fff",
  };

  return (
    <div style={formContainerStyle}>
      <form className={bookingStyle} onSubmit={handleSubmit}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={inputs.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={inputs.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={inputs.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Date</label>
        <input
          type="date"
          name="date"
          value={inputs.date}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Time</label>
        <select
          name="time"
          value={inputs.time}
          onChange={handleChange}
          disabled
          style={selectStyle}
        >
          <option>Dinner</option>
        </select>

        <label style={labelStyle}>Guests</label>
        <select
          name="persons"
          value={inputs.persons}
          onChange={handleChange}
          required
          style={selectStyle}
        >
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
        </select>

        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          placeholder="Any special requests?"
          value={inputs.message}
          onChange={handleChange}
          style={textareaStyle}
        ></textarea>

        {/* Zelfde stijl als bestaande SubmitButton */}
        <SubmitButton>Send Reservation</SubmitButton>
      </form>
    </div>
  );
}
