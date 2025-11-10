import React, { useState } from "react";
import classNames from "classnames";
import { SubmitButton } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function BookingSystem(props) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "18:00",
    finishTime: "", 
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

    try {
      const formData = new FormData();
      Object.entries(inputs).forEach(([key, value]) => formData.append(key, value));

      const res = await fetch("https://formspree.io/f/mdkynaww", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        // reset form
        setInputs({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "18:00",
          finishTime: "", 
          persons: "2",
          message: "",
        });
        // redirect naar bedankpagina
        navigate("/reservation-success");
      } else {
        const data = await res.json();
        alert(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while sending your reservation.");
    }
  };

  const bookingStyle = classNames("booking-system-form", {
    "style-2": props?.styleTwo,
  });

  const formContainerStyle = { maxWidth: "500px", margin: "0 auto", padding: "20px 0" };
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
  const selectStyle = { 
    ...inputStyle, 
    appearance: "none",
    backgroundColor: "#040D10",
    color: "#fff",
    paddingRight: "12px"
  };
  const textareaStyle = { ...inputStyle, minHeight: "90px", resize: "vertical" };
  const labelStyle = { marginBottom: "6px", display: "block", fontWeight: "500", color: "#fff" };

  // Openingsuren
  const timeOptions = [
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
    "21:00", "21:30", "22:00", "22:30", "23:00",
    "23:30 (Fri & Sat Cocktails & Finger Food)",
    "00:00 (Fri & Sat Cocktails & Finger Food)",
    "01:00 (Fri & Sat Cocktails & Finger Food)",
    "02:00 (Fri & Sat Cocktails & Finger Food)"
  ];

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

        <label style={labelStyle}>Reservation Time</label>
        <select name="time" value={inputs.time} onChange={handleChange} style={selectStyle} required>
          {timeOptions.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        <label style={labelStyle}>Expected Finish Time (optional)</label>
        <select
          name="finishTime"
          value={inputs.finishTime}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Select finish time (optional)</option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        <label style={labelStyle}>Guests</label>
        <select name="persons" value={inputs.persons} onChange={handleChange} required style={selectStyle}>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
          ))}
        </select>

        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          placeholder="Any special requests?"
          value={inputs.message}
          onChange={handleChange}
          style={textareaStyle}
        />

        <SubmitButton type="submit">Send Reservation</SubmitButton>
      </form>
    </div>
  );
}
