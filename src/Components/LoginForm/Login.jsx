import React from 'react';
import '../LoginForm/Login.css';

const Login = () => {
  const popup = () => {
    alert('login-popup');
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <select>
        <option>Doctor</option>
        <option>Patient</option>
        <option>Admin</option>
        <option>Receptionist</option>
      </select>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <div className="login-btn" onClick={popup}>
        LOGIN
      </div>
      <p className="text">OR LOGIN USING</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
    </div>
  );
};

export default Login;
