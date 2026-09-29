import { supabase } from "../lib/supabaseClient"; 
import React, { useState } from "react";
import "./Login.css"; 
import { useNavigate } from "react-router-dom"; 

export default function Login() { 
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState(""); 

  const handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const password = e.target.password.value;

  setMessage("");

  if (!email || !password) {
    setMessageType("error");
    setMessage("Please enter your email and password.");
    return;
  }

  if (password.length < 6) {
    setMessageType("error");
    setMessage("Password must be at least 6 characters long.");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setMessageType("error");
    setMessage(error.message);
    return;
  }

  setMessageType("success");
  setMessage("Login successful! Welcome back.");
}; 
  return (
    <div className="login-page">
      <div className="login-visual">
        <div className="login-brand">
          <div className="login-logo">▦</div>
          <span>HeritagePlay</span>
        </div>

        <div className="login-visual-content">
          <span className="login-eyebrow">WELCOME BACK</span>

          <h1>
            Continue your
            <br />
            journey through
            <br />
            <em>heritage.</em>
          </h1>

          <p>
            Explore ancient games, artifacts, stories and the civilizations
            that shaped our past.
          </p>
        </div>

        <div className="login-visual-footer">
          <span>✦</span>
          <span>Learn · Explore · Play</span>
        </div>
      </div>

      <div className="login-form-section">
        <div className="login-form-container">

          <div className="mobile-brand">
            <div className="login-logo">▦</div>
            <span>HeritagePlay</span>
          </div>

          <div className="login-heading">
            <span className="login-small-label">YOUR JOURNEY AWAITS</span>

            <h2>Welcome back</h2>

            <p>
              Sign in to continue exploring HeritagePlay.
            </p>
          </div>

          <form onSubmit={handleSubmit}> 
            {message && (
  <div className={`login-message ${messageType}`}>
    {message}
  </div>
)} 

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Password reset feature coming soon.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="password-input">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="login-button">
              Sign in
              <span>→</span>
            </button>

          </form>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <button
            type="button"
            className="google-button"
            onClick={() =>
              alert("Google sign-in will be connected later.")
            }
          >
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?
            <button onClick={() => navigate("/register")}>
  Create one
</button> 
          </p>

          <p className="login-terms">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
} 