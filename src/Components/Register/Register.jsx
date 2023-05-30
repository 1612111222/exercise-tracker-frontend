import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/register"; // Update the endpoint URL
      const response = await axios.post(url, data); // Send the data to the server
      console.log(response.data.message); // Optional: Log the response message
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error.response.status);
      }
      if (error.response.status === 201) {
        alert("User registration done");
        setData({ ...data,firstName: "", lastName: "", email: "", password: "" });
      }
    }
  };
  

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn"> Sign in</button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input type="text"  placeholder="First Name"  name="firstName"  onChange={handleChange}  value={data.firstName}  required  className="input"/>
            <input type="text" placeholder="Last Name" name="lastName"  onChange={handleChange}  value={data.lastName}  required  className="input" />
            <input type="email"  placeholder="Email"  name="email"  onChange={handleChange}  value={data.email}  required className="input"/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className="input"/>
            <button type="submit" className="green_btn"> Sign Up </button>
          </form>
        </div>
      </div>
    </div>
  );
};
