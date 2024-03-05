import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  // State variables to store user input
  const [fname, setFirstname] = useState('');
  const [lname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data (e.g., check if email is valid, passwords match, etc.)
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Perform registration logic (e.g., send data to server, update state, etc.)
    console.log('Registration data:', { email, password });
    const userData = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password
      };
      localStorage.setItem('userData', JSON.stringify(userData));

    // Clear form fields after submission
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form  onSubmit={handleSubmit}>
      <div >
          <label>First Name</label>
          <input
            type="name"
            value={fname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="name"
            value={lname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        Already Registered?<Link to ='/login'>Login Here</Link>
      </form>

    </div>
  );
};

export default RegisterPage;
