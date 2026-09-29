import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setMessageType("error");
      setMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setMessageType("error");
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setMessageType("error");
      setMessage(error.message);
      return;
    }

    setMessageType("success");
    setMessage(
      "Account created successfully! Check your email to verify your account."
    );
  };

  return (
    <div className="register-page">

      <div className="register-visual">
        <div className="register-brand">
          <div className="brand-icon">▦</div>
          <span>HeritagePlay</span>
        </div>

        <div className="register-visual-content">
          <p className="eyebrow">BEGIN YOUR JOURNEY</p>

          <h1>
            Discover the
            <br />
            stories behind
            <br />
            <span>heritage.</span>
          </h1>

          <p className="visual-description">
            Create your account and explore ancient games, artifacts,
            archaeological mysteries and India's cultural heritage.
          </p>
        </div>

        <div className="register-footer">
          ✦ &nbsp; Learn · Explore · Play
        </div>
      </div>

      <div className="register-form-section">
        <div className="register-form-container">

          <p className="register-eyebrow">JOIN HERITAGEPLAY</p>

          <h2>Create your account</h2>

          <p className="register-subtitle">
            Start exploring India's heritage through play.
          </p>

          {message && (
            <div className={`register-message ${messageType}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Full name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="password-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>

              <div className="password-wrapper">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="register-button">
              Create account
              <span>→</span>
            </button>

          </form>

          <div className="login-link">
            Already have an account?
            <button onClick={() => navigate("/login")}>
              Sign in
            </button>
          </div>

          <p className="register-terms">
            By creating an account, you agree to our Terms and Privacy Policy.
          </p>

        </div>
      </div>

    </div> 
  );
}

export default Register;