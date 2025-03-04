import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import "./SidePanelWithForm.css";
import "./signup.css";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between SignUp and SignIn forms
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({}); // State to store validation errors
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ username: "", email: "", password: "", confirmPassword: "" }); // Clear form data on toggle
    setErrors({}); // Clear errors on toggle
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (isSignup) {
      if (!formData.username.trim()) newErrors.username = "Username is required.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Please enter a valid email.";
      if (!formData.password.trim()) newErrors.password = "Password is required.";
      if (formData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters long.";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";
    } else {
      if (!formData.username.trim()) newErrors.username = "Username is required.";
      if (!formData.password.trim()) newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate form submission
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <div className={`wrapper ${isSignup ? "animated-signup" : "animated-signin"}`}>
        {/* Sign-Up Form */}
        {isSignup && (
          <div className="form-container sign-up active">
            <h2>Sign Up</h2>
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                aria-label="Username"
              />
              <FontAwesomeIcon icon={faUser} />
              <label>Username</label>
              {errors.username && <small className="error-message" aria-live="polite">{errors.username}</small>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-label="Email"
              />
              <FontAwesomeIcon icon={faAt} />
              <label>Email</label>
              {errors.email && <small className="error-message" aria-live="polite">{errors.email}</small>}
            </div>
            <div className="form-group">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-label="Password"
              />
              <FontAwesomeIcon icon={faLock} />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
              <label>Password</label>
              {errors.password && <small className="error-message" aria-live="polite">{errors.password}</small>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                aria-label="Confirm Password"
              />
              <FontAwesomeIcon icon={faLock} />
              <label>Confirm Password</label>
              {errors.confirmPassword && <small className="error-message" aria-live="polite">{errors.confirmPassword}</small>}
            </div>
            <button type="submit" className="btn">Sign Up</button>
            <div className="link">
              <p>
                Already have an account? <button type="button" onClick={toggleForm} className="signin-link">Sign In</button>
              </p>
            </div>
          </div>
        )}

        {/* Sign-In Form */}
        {!isSignup && (
          <div className="form-container sign-in active">
            <h2>Login</h2>
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                aria-label="Username"
              />
              <FontAwesomeIcon icon={faUser} />
              <label>Username</label>
              {errors.username && <small className="error-message" aria-live="polite">{errors.username}</small>}
            </div>
            <div className="form-group">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-label="Password"
              />
              <FontAwesomeIcon icon={faLock} />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
              <label>Password</label>
              {errors.password && <small className="error-message" aria-live="polite">{errors.password}</small>}
            </div>
            <div className="forgot-pass">
              <a href="./">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="link">
              <p>
                Don’t have an account? <button type="button" onClick={toggleForm} className="signup-link">Sign Up</button>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Signup;
