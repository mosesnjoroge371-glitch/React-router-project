import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const result = login(email, password);
    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Kithan Autocare Limited</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <div className="auth-links">
          <Link to="/signup">Create an account</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <div className="demo-credentials">
          <p>
            <strong>Demo Credentials:</strong>
          </p>
          <p>Email: admin@kithan.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
