import React, { useEffect, useRef, useState } from "react";
import mailVerifyForOTP from "../../../assets/img/mail.png";
import { NavLink } from "react-router-dom";

export default function OTPVerificationLayout() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpError, setOtpError] = useState("");
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError("");
    if (value !== "" && index < 5) {
      inputsRef.current[index + 1].focus();
    }
    if (value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }
    if (event.key === "Delete" && index < 5 && otp[index] === "") {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      setOtpError("Please enter the complete OTP");
    } else {
      // Redirect to "/home"
      document.getElementById("homeNavLink").click();
    }
  };

  return (
    <>
      <body
        style={{
          minHeight: "100vh",
          backgroundColor: "#f3f4f6",
          color: "#374151",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%", padding: "6rem" }}>
          <div
            style={{
              marginTop: "8rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={mailVerifyForOTP}
              style={{ width: "60px", height: "60px" }}
              alt=""
            />

            <br />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <div style={{ maxWidth: "240px" }}>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                    whiteSpace: "nowrap", // Ensures text stays in one line
                  }}
                >
                  <span>
                    Enter the OTP we have sent to your Registered Email
                  </span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    {otp.map((value, index) => (
                      <input
                        key={index}
                        style={{
                          margin: "0.5rem",
                          border: "1px solid #d1d5db",
                          height: "2.5rem",
                          width: "2.5rem",
                          textAlign: "center",
                          borderRadius: "0.375rem",
                        }}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(event) => handleChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        ref={(el) => (inputsRef.current[index] = el)}
                      />
                    ))}
                  </div>
                  {otpError && (
                    <p style={{ color: "red", textAlign: "center" }}>
                      {otpError}
                    </p>
                  )}
                  <button
                    style={{
                      marginTop: "2rem",
                      fontWeight: "600",
                      // backgroundColor: "#4f46e5",
                      color: "#ffffff",
                      width: "100%",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                    type="submit"
                  >
                    Verify OTP
                  </button>
                  <NavLink
                    id="homeNavLink"
                    to="/client/otp-verified"
                    style={{ display: "none" }} // Hide the NavLink visually
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
