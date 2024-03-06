// EducationDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EducationDetails = () => {
  const { tenth, higherSecondary, graduation, certifications } = useSelector(
    (state) => state.user.education
  );

  return (
    <div>
      <h2>Education Details</h2>
      <p>10th Institute: {tenth.instituteName}</p>
      <p>10th CGPA: {tenth.cgpa}</p>
      <p>Higher Secondary Institute: {higherSecondary.instituteName}</p>
      <p>Higher Secondary CGPA: {higherSecondary.cgpa}</p>
      <p>Graduation Institute: {graduation.instituteName}</p>
      <p>Graduation CGPA: {graduation.cgpa}</p>
      <h3>Certifications</h3>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
      <Link to="/add-certification">Add New Certification</Link>
    </div>
  );
};

export default EducationDetails;
