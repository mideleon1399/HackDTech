import React from "react";
import './NavBar.css';
import {Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
     <li className="link"><Link to="/" ><div className="button">What is COVID-19 </div></Link></li>
     <li className="link"> <Link to="/map" ><div className="button">Map </div></Link></li>
     <li className="link"> <Link to="/resources" ><div className="button">Resources </div></Link></li>
    </ul>
  );
};
export default NavBar; 