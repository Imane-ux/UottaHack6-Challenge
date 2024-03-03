// src/pages/LoginPage.jsx
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='wrapper'>
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        {/* Navigate to chat page when the login button is clicked */}
        <Link to="/chat">
          <button type='submit'>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
