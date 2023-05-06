import React from "react";
import './Style/nav.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="header">
            <h1><Link to={"/"}>Registration Portal</Link></h1>
          
        </div>
        <div className="links">
          <ul>
            <li><h3><Link to={"/"}>Registration Form</Link></h3> </li>
            <li><h3><Link to={"/register-data"}>All Candidate</Link></h3> </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}
