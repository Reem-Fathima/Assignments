// Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Hello {name}</h1>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Dashboard;
  