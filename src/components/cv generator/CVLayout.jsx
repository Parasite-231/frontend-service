import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function InputForm() {
  const { id } = useParams(); // Get the ID from the URL params
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    position: "",
    textColor: "#000000", // Initial text color
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTextColorChange = (e) => {
    const textColor = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      textColor,
    }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Left side - Input form */}
      <div style={{ flex: "1" }}>
        <h2>CV Generator - Card {id}</h2>
        {/* Input fields for email, name, address, position */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>

        {/* Input field for text color */}
        <div>
          <label>Text Color:</label>
          <input
            type="color"
            value={formData.textColor}
            onChange={handleTextColorChange}
          />
        </div>
      </div>

      {/* Right side - Display the updated data */}
      <div style={{ flex: "1", paddingLeft: "20px" }}>
        <div style={{ color: formData.textColor }}>
          <h2>Preview</h2>
          <p>Email: {formData.email}</p>
          <p>Name: {formData.name}</p>
          <p>Address: {formData.address}</p>
          <p>Position: {formData.position}</p>
        </div>
      </div>
    </div>
  );
}
