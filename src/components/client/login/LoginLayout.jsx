import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Password from "antd/es/input/Password";

export default function LoginLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const base_url = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please provide your gmail account");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Please provide your password");
      return;
    } else {
      setPasswordError("");
    }

    // Make a POST request to login
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        // Handle successful login
        const token = response.data; // Assuming token is directly received in the response
        console.log(token)
        if (token) {
          const clientInfo = {
            auth: true,
          };

          sessionStorage.setItem("clientInfo", JSON.stringify(clientInfo));
          sessionStorage.setItem("accessToken", token);

          toast.success("Login successful!"); // Display success message
          setTimeout(() => {
            navigate("/home"); // Redirect to login after a delay
          }, 3000);
        } else {
          toast.error("Token not found in response");
        }
      })
      .catch((error) => {
        // Handle login errors
        if (error.response.status === 401) {
          toast.error("User doesn't exist");
        } else if (error.response.status === 400) {
          toast.error("Wrong email and password combination");
        } else if (error.response.status === 403) {
          toast.error("Account verification required");
        } else {
          console.error("Login failed:", error.response.data.error);
        }
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <>
      <ToastContainer position="bottom-right" />{" "}
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-7 d-none d-md-flex bg-image"></div>

          <div className="col-md-5 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Sign In</h3>
                    <p className="text-muted mb-4"></p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required
                          className={`form-control rounded-pill border-0 shadow-sm px-4 ${
                            emailError ? "is-invalid" : ""
                          }`}
                          value={email}
                          onChange={handleEmailChange}
                          name="email"
                        />
                        {emailError && (
                          <div className="invalid-feedback">{emailError}</div>
                        )}
                      </div>
                      <div className="form-group mb-3">
                        <Password
                          id="inputPassword"
                          placeholder="Password"
                          required
                          className={`form-control rounded-pill border-0 shadow-sm px-4 text-primary ${
                            passwordError ? "is-invalid" : ""
                          }`}
                          value={password}
                          onChange={handlePasswordChange}
                          name="password"
                        />
                        {passwordError && (
                          <div className="invalid-feedback">
                            {passwordError}
                          </div>
                        )}
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="customCheck1"
                          className="custom-control-label"
                        >
                          &nbsp;Remember password
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                        style={{ background: "#8FC8CD", color: "white" }}
                      >
                        Sign in
                      </button>
                    </form>
                    <span className="d-block text-center my-4 text-muted">
                      Don't have an account ?{" "}
                      <NavLink
                        to="/client/register"
                        style={{ color: "#8FC8CD" }}
                      >
                        Sign Up
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
