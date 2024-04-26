import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    phoneNumberError: "",
    emailError: "",
    messageError: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (formData.name.trim() === "") {
      newErrors.nameError = "Please enter your name";
      isValid = false;
    } else {
      newErrors.nameError = "";
    }

    // Validate phone number
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumberError = "Please enter your phone number";
      isValid = false;
    } else if (!/^\d{11}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumberError = "Phone number must be 11 digits";
      isValid = false;
    } else {
      newErrors.phoneNumberError = "";
    }

    // Validate email
    if (formData.email.trim() === "") {
      newErrors.emailError = "Please enter your email";
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@gmail\.com$/.test(formData.email.trim())) {
      newErrors.emailError = "Please enter a valid Gmail address";
      isValid = false;
    } else {
      newErrors.emailError = "";
    }

    // Validate message
    if (formData.message.trim() === "") {
      newErrors.messageError = "Please enter your message";
      isValid = false;
    } else {
      newErrors.messageError = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log("Form submitted:", formData);
      // Reset form data
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      // Optionally, show a success message or redirect to another page
    }
  };

  return (
    <>
      <section className="contact_section long_section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="error">{errors.nameError}</div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    <div className="error">{errors.phoneNumberError}</div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="error">{errors.emailError}</div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <div className="error">{errors.messageError}</div>
                  </div>
                  <div className="btn_box">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
