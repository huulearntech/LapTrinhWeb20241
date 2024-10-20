import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignInSignUp.css";   // Import CSS dùng chung

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="auth-button">Sign Up</button>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;