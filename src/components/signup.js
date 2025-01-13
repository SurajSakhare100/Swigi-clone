import React from "react";
import "./SidePanelWithForm.css";
import "./signup.css";

const Signup = () => {
  return (
    <form className="modal-form">
      {/* Full Name Input */}
      <div className="input-group">
        <input
          type="text"
          name="name"
          id="name"
          className="input-field"
          autoComplete="off"
          required
        />
        <label htmlFor="name" className="input-label">
          Full Name
        </label>
      </div>

      {/* Phone Number Input */}
      <div className="input-group">
        <input
          type="tel"
          name="mobile"
          id="mobile"
          className="input-field"
          maxLength="10"
          autoComplete="off"
          required
        />
        <label htmlFor="mobile" className="input-label">
          Phone Number
        </label>
      </div>

      {/* Email Input */}
      <div className="input-group">
        <input
          type="email"
          name="email"
          id="email"
          className="input-field"
          autoComplete="off"
          required
        />
        <label htmlFor="email" className="input-label">
          Email
        </label>
      </div>

      {/* Signup Button */}
      <div className="login-button-wrapper">
        <button type="submit" className="login-button">
          Signup
        </button>
      </div>

      {/* Terms & Conditions */}
      <div className="terms-conditions">
        By clicking on Signup, I accept the{" "}
        <a href="/terms-and-conditions" className="terms-link">
          Terms & Conditions
        </a>{" "}
        &{" "}
        <a href="/privacy-policy" className="privacy-link">
          Privacy Policy
        </a>
      </div>
    </form>
  );
};

export default Signup;
