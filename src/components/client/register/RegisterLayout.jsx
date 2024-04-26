import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function RegisterLayout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [selectedGender, setSelectedGender] = useState("");
  const [genderWarning, setGenderWarning] = useState("");

  
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobileNumber) {
      setMobileError("Please provide your mobile number");
      return;
    } else if (!/^\d{11}$/.test(mobileNumber)) {
      setMobileError("Mobile number must be an 11-digit number");
      return;
    } else {
      setMobileError("");
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@dreamonline\.co\.jp$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please provide your organization email");
      return;
    } else {
      setEmailError("");
    }

    if (!selectedGender) {
      setGenderWarning("Please choose your gender");
      return;
    } else {
      setGenderWarning("");
    }
    // Password validation
    // const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z\d]{6,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,15}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, including at least one uppercase letter and one numeric digit, and must not exceed 15 characters"
      );
      return;
    } else {
      setPasswordError("");
    }
    // Matching passwords validation
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    } else {
      setConfirmPasswordError("");
    }

    // if (
    //   emailError === "" &&
    //   passwordError === "" &&
    //   employeeIdError === "" &&
    //   confirmPasswordError === ""
    // ) {
    //   var encryptedPassword = CryptoJS.AES.encrypt(
    //     JSON.stringify(password),
    //     my_secret_key
    //   ).toString();

    //   axios
    //     .post(`${base_url}/api/v1/client/auth/registration`, {
    //       name: name,
    //       employee_id: employeeId,
    //       email: email,
    //       active: "pending",
    //       gender: gender,
    //       password: encryptedPassword,
    //     })
    //     .then((response) => {
    //       if (
    //         response.data.code === 200 &&
    //         response.data.message === "User registered successfully"
    //       ) {
    //         setModalVisible(true);
    //         setModalMessage("Registration successful !");
    //         setRegistrationSuccess(true);

    //         setTimeout(() => {
    //           setModalVisible(false);
    //           navigate("/login");
    //         }, 3000);
    //       } else if (response.status === 409) {
    //         setModalVisible(true);
    //         setModalMessage("User already exists");
    //       }
    //     })
    //     .catch((error) => {
    //       setModalVisible(true);
    //       setModalMessage("User already exists");
    //       console.log(error);
    //     });
    // }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleGenderChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGender(selectedValue);
    setGenderWarning("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image-register"></div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Sign Up</h3>
                    <p className="text-muted mb-4"></p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={handleNameChange}
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          placeholder="Username"
                          name="name"
                          autoFocus
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <select
                          className={`form-control rounded-pill border-0 shadow-sm px-4 ${
                            genderWarning ? "is-invalid" : ""
                          }`}
                          value={selectedGender}
                          onChange={handleGenderChange}
                        >
                          <option value="">Select your gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        {genderWarning && (
                          <div className="invalid-feedback">
                            {genderWarning}
                          </div>
                        )}
                      </div>
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
                      {/* Dynamic mobile number input field */}
                      <div className="mb-3">
                        <input
                          id="mobile"
                          type="tel"
                          className={`form-control rounded-pill border-0 shadow-sm px-4 ${
                            mobileError ? "is-invalid" : ""
                          }`}
                          name="mobile"
                          placeholder="Mobile Number"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          required
                        />
                        {mobileError && (
                          <div className="invalid-feedback">{mobileError}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <input
                          id="password"
                          type="password"
                          className={`form-control rounded-pill border-0 shadow-sm px-4 ${
                            passwordError ? "is-invalid" : ""
                          }`}
                          name="password"
                          value={password}
                          placeholder="Password"
                          onChange={handlePasswordChange}
                          required
                        />
                        {passwordError && (
                          <div className="invalid-feedback">
                            {passwordError}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <input
                          id="retyped_password"
                          type="password"
                          className={`form-control rounded-pill border-0 shadow-sm px-4 ${
                            confirmPasswordError ? "is-invalid" : ""
                          }`}
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          required
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                        />
                        {confirmPasswordError && (
                          <div className="invalid-feedback">
                            {confirmPasswordError}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                      >
                        Sign Up
                      </button>
                    </form>
                    <span className="d-block text-center my-4 text-muted">
                      Don't have an account ?{" "}
                      <NavLink to="/client/login">Sign In</NavLink>
                    </span>
                    <span className="d-block text-center my-4 text-muted">
                      &mdash; or &mdash;
                    </span>
                    <div className="social-login">
                      <a
                        href="#"
                        className="facebook btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-facebook mr-3"></span> Register
                        with Facebook
                      </a>
                      <a
                        href="#"
                        className="twitter btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-twitter mr-3"></span> Register
                        with Twitter
                      </a>
                      <a
                        href="#"
                        className="google btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-google mr-3"></span> Register with
                        Google
                      </a>
                    </div>
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
