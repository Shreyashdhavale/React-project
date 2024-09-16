import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import axios from  "axios";
import { useState } from "react";
import LoginPage from "./LoginPage";

export default function RegistrationPage() {
  const [registerData, setregisterData] = useState({
    username: "",
    password: "",
  });
  const handleRegisterPage = (e) => {
    const { name, value } = e.target;
    setregisterData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(registerData);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        registerData
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    setregisterData({
      username: "",
      password: ""
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input_field">
            <label value="username">Username:-</label>
            <input
              type="text"
              name="username"
              placeholder="Enter the Username.."
              onChange={handleRegisterPage}
            />
          </div>
          <div className="input_field">
            <label value="username">Password:-</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the Password.."
              onChange={handleRegisterPage}
            />
          </div>
          <button type='submit'>Register</button>
        </form>
        <p>
          <Link to='/login'>Already Signed In</Link>
        </p>
      </div>
    </div>
  );
}
