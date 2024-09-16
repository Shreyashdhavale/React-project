import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import axios from  "axios";
import RegistrationPage from "./RegistrationPage";


export default function LoginPage() {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const handleLoginPage = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(loginData);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try{
        const response  = await axios.post("http://localhost:8000/login", loginData);
        console.log(response.data);
    }
    catch(e){
        console.log("Error");
    }
    setloginData({
        username: "",
        password:""
    })
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login Page</h2>
        <form onSubmit={handleLoginSubmit}>
        <div className="input_field">
          <label value="username">Username:-</label>
          <input
            type="text"
            name="username"
            placeholder="Enter the Username.."
            onChange={handleLoginPage}
          />
        </div>
        <div className="input_field">
          <label value="username">Password:-</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the Password.."
            onChange={handleLoginPage}
          />
        </div>
        <button ON>Login</button>
        </form>
        <p>
           <Link to='/register'>Not Registered yet?</Link>
        </p>
      </div>
    </div>
)}
