import React, { useState } from "react";
import './Login.css'; // External CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {

  const nav=useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Clear form fields when switching
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      if (email === "" || password === "") {
        alert("Please fill in all fields for login");
        return;
      }
      // Placeholder for successful login
      alert("Login successful!");
      nav('/');

    } else {
      // Signup logic
      if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields for signup");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // Placeholder for successful signup
      alert("Signup successful!");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="app-name">PrepPulse</h2>

        {/* Toggle Form Heading */}
        <h3>{isLogin ? "Login" : "Signup"}</h3>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Username (only for signup) */}
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password (only for signup) */}
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn submit-btn">
            {isLogin ? "Login" : "Signup"}
          </button>

          {/* Toggle Link */}
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span className="toggle-link" onClick={toggleForm}>
              {isLogin ? "Signup" : "Login"}
            </span>
           <br></br><br></br>If you're a Admin <a href="/admin/login" className="toggle-link" >Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
