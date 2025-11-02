import classNames from "classnames";
import React, { useState } from "react";
import { SubmitButton } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function BookingSystem(props) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/reservations");
  };

  const bookingStyle = classNames("booking-system-form ", {
    "style-2": props?.styleTwo,
  });

  return (
    <div className="booking-system-form">
      <form className={bookingStyle} onSubmit={handleSubmit}>
        <SubmitButton>Reservations</SubmitButton>
      </form>
    </div>
  );
}
