import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { forgotPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    const result = forgotPassword(email);
    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => navigate("/"), 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Kithan Autocare Limited</h1>
        <h2>Forgot Password</h2>
        <p className="info-text">
          Enter your email address and we'll send you a password reset link.
        </p>
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
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <button type="submit" className="submit-btn">
            Send Reset Link
          </button>
        </form>
        <div className="auth-links">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
