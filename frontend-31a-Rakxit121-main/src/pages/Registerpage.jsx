import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserApi } from "../apis/api";
import "../style/Register.css";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useState (Setting error message)
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // validate input value
  const validate = () => {
    var isValid = true;

    // reset error message
    setFnameError("");
    setLnameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (firstName.trim() === "") {
      setFnameError("First Name is required");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLnameError("Last Name is required");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (confirmPassword.trim() === "" || confirmPassword !== password) {
      setConfirmPasswordError("Password and Confirm Password must match");
      isValid = false;
    }

    return isValid;
  };

  //function for changing input value
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  //function for button
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!validate()) {
      return;
    }

    // If validation is successful, proceed with API call
    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    // Making API call
    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Server error");
        console.error(err.message);
      });
  };

  return (
    <div className="content">
      <div className="parallax-container">
        <img
          className="parallax-image"
          src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=1380&t=st=1704725863~exp=1704726463~hmac=9a727b1f80330b82183ab71dd24a068455b19bc8f3bbd4cc0a247ebd3893aa1b"
          alt="Parallax Image"
        />
      </div>
      <div className="container_register">
        {/* <div
          className="wrapper"
          style={{
            backgroundImage: "url('assets/salicylic acid.png')",
          }}
        > */}
        <div className="inner">
          <form action="">
            <h3>Registration Form</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                onChange={(e) => handleChange(e, setFirstName)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                onChange={(e) => handleChange(e, setLastName)}
              />
            </div>
            {fnameError && lnameError && (
              <p className="text-danger">
                {fnameError}
                <span> and {lnameError}</span>
              </p>
            )}
            {fnameError && !lnameError && (
              <p className="text-danger">{fnameError}</p>
            )}
            {!fnameError && lnameError && (
              <p className="text-danger">{lnameError}</p>
            )}
            <i className="zmdi zmdi-email"></i>
            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
              />
              <i className="zmdi zmdi-account"></i>
              <p></p>
            </div>
            <div className="form-wrapper">
              <input
                type="tel"
                className="form-control"
                maxLength={10}
                name="phoneNumber"
                placeholder="Phone No."
                onChange={(e) => handleChange(e, setEmail)}
              />

              <i className="zmdi zmdi-email"></i>
              <p className="text-danger">
                {emailError && <span>{emailError}</span>}
              </p>
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Email Address"
                className="form-control"
                onChange={(e) => handleChange(e, setEmail)}
              />
              <i className="zmdi zmdi-email"></i>
              <p className="text-danger">
                {emailError && <span>{emailError}</span>}
              </p>
            </div>
            <div className="form-wrapper">
              <select name="" id="" className="form-control">
                <option value="" disabled="" selected="">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <i
                className="zmdi zmdi-caret-down"
                style={{ fontSize: "17px" }}
              ></i>
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => handleChange(e, setPassword)}
              />

              <i className="zmdi zmdi-lock"></i>
              <p className="text-danger">
                {passwordError && <span>{passwordError}</span>}
              </p>
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                onChange={(e) => handleChange(e, setConfirmPassword)}
              />
              <i className="zmdi zmdi-lock"></i>
              <p className="text-danger">
                {confirmPasswordError && <span>{confirmPasswordError}</span>}
              </p>
            </div>
            <button onClick={handleSubmit}>
              Register
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default RegisterPage;
