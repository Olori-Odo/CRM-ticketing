import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   const { name, value } = e.target;
  //   setLoginUser((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post("http://localhost:9002/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/DashboardLayout");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-container">
      <p className="heading">Login</p>

      <form
        action="/login"
        method="POST"
        className="contain"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="forgot">
          <Link to="/Forgotpass">Reset Password</Link>
        </div>

        <button type="submit" className="sign">
          Sign in
        </button>

        <div className="inn">
          <p className="message">
            Don't have an account yet?{" "}
            <Link to="/Signup">Sign up for free</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
