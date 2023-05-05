import React from "react";
import './Style/nav.css'

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="header">
            <h1><a href="/">Registration Portal</a></h1>
          
        </div>
        <div className="links">
          <ul>
            <li><h3><a href="//">Registration Form</a></h3> </li>
            <li><h3><a href="///">All Candidate</a></h3> </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}
