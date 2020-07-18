import React from "react";
import './NavBar.css';
import {Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
     <li className="link"><Link to="/" >What is COVID-19 </Link></li>
     <li className="link"> <Link to="/map" className="link">Map </Link></li>
     <li className="link"> <Link to="/resources" className="link"> Resources </Link></li>
    </ul>
  );
};
export default NavBar; 