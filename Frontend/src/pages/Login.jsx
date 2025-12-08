import React from 'react';
import './Login.css';
import { FaUser, FaUnlock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="email" placeholder='E-mail' required/>
                <FaUser/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaUnlock/>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>

        </form>


    </div>
  );
}