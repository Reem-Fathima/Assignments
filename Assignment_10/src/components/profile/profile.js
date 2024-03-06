// Profile.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { name, country, gender, pan } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Personal Details</h2>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Gender: {gender}</p>
      <p>PAN: {pan}</p>
      <Link to={'./education'}>View Education Details</Link>
    </div>
  );
};

export default Profile;
