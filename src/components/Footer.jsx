import React from 'react';


const Footer = () => {
  const today = new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <footer>
      <p> Idag är det: {today} </p>
      <p> Studieguide | 2024 </p>
    </footer>
  );
};

export default Footer;
