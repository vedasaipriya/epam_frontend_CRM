import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <h4 className="text-center">All Right Reserved &copy; ❤️ </h4>
        <p className='text-center mt-3'>
          <Link to="/about">About</Link>
          |
          <Link to="/contact">Contact</Link>
          |
          <Link to="/team">Meet Team</Link>
        </p>
    </div>
  );
};

export default Footer;