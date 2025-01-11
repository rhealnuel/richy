import React, { useState } from "react";

const Details = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      Name and Surname: ${formData.name}
      Phone Number: ${formData.number}
      Email: ${formData.email}
      Full Address: ${formData.address}
      Amount Paid: ${formData.payment}
    `;

    try {
      const response = await fetch("https://formspree.io/f/mpwwkagb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email, // Recipient email
          message: message,     // Custom message with form data
        }),
      });

      if (response.ok) {
        alert("Details sent successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          address: "",
          payment: "",
        });
      } else {
        alert("Failed to send details. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending details.");
    }
  };

  return (
    <form className="payment" onSubmit={handleSubmit}>
      <h1 className="payTitle">Personal Information</h1>

      <label>Name and Surname</label>
      <input
        type="text"
        placeholder="John Doe"
        className="payInput"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="+1 234 5678"
        className="payInput"
        name="number"
        value={formData.number}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="example@mail.com"
        className="payInput"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Full Address</label>
      <input
        type="text"
        placeholder="23, John Street, London"
        className="payInput"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <label>Amount Paid</label>
      <input
        type="text"
        placeholder="$1,000"
        className="payInput"
        name="payment"
        value={formData.payment}
        onChange={handleChange}
      />

      <input type="submit" value="Send your Details" id="payButton" />
      <span className="close">
        <a href="/">X</a>
      </span>
    </form>
  );
};

export default Details;
