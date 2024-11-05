// components/CV.js
"use client"
import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const star = '★'; // Unicode character for filled star
const emptyStar = '☆'; // Unicode character for empty star

const getStarRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(star);
    } else {
      stars.push(emptyStar);
    }
  }
  return stars.join(' ');
};

const CV = () => {
  const generatePDF = () => {
    const input = document.getElementById('cv');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      
      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('my_cv.pdf');
    });
  };

  return (
    <div>
      <div id="cv" style={{ padding: '20px', fontFamily: 'Arial', fontSize: '12pt' }}>
        <h1>Your Name</h1>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        
        <h2>Skills</h2>
        <ul>
          <li>JavaScript - <strong>{getStarRating(4)}</strong> (4/5 stars)</li>
          <li>React - <strong>{getStarRating(5)}</strong> (5/5 stars)</li>
          <li>Node.js - <strong>{getStarRating(3)}</strong> (3/5 stars)</li>
        </ul>
        
        <h2>Experience</h2>
        <p>Job Title at Company Name (Year - Year)</p>
        <p>Responsibilities and achievements...</p>

        <h2>Education</h2>
        <p>Your Degree - Institution Name (Year)</p>
      </div>
      <button onClick={generatePDF}>Download CV</button>
    </div>
  );
};

export default CV;
