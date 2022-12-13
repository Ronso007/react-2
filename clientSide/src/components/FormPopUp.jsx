import "./FormPopUp.css";
import React, { useState, useEffect } from "react";

function FormPopUp({ show, close, items }) {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const submit = () => {
    const requestOptions = {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contactInfo.name,
        email: contactInfo.email,
        message: contactInfo.message,
        items: items,
      }),
    };
    fetch("http://localhost:3000/orders", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log(contactInfo.name, contactInfo.email, contactInfo.message);
    console.log(requestOptions.body);
    close();
  };

  return (
    <div className={`form-pop-up ${show ? "show" : ""}`}>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={contactInfo.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" onClick={submit}>
          Submit
        </button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FormPopUp;
