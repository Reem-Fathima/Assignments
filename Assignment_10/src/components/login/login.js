import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './login.css'

const Login = () => {
  // State variables to store input values and validation status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform login logic
    console.log('Submitted:', { username, password });
    window.location.href='/dashboard'
  };

  // Function to handle username input change and validate email format
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameValid(/^\S+@\S+\.\S+$/.test(e.target.value));
  };

  // Function to handle password input change and validate password format
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(e.target.value));
  };

  // Determine if submit button should be disabled
  const isSubmitDisabled = !(usernameValid && passwordValid);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username (Email)</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        
        {!usernameValid && <p style={{ color: 'red' }}>Invalid email format</p>}
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          
        </div>
        
        <button type="submit" disabled={isSubmitDisabled}>Login</button>
        <div>
          Not registered?<Link to={'/register'}>Register here.</Link>
        </div>
      </form>
      {!passwordValid && (
            <p style={{ color: 'red' }}>Password must contain at least one uppercase letter, one numeric character, and one special character</p>
          )}

    </div>

  );
};

export default Login;