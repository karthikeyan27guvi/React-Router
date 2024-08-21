import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/all" className="nav-link">
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/full-stack-development" className="nav-link">
            Full Stack Development
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data-science" className="nav-link">
            Data Science
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data-engineer" className="nav-link">
            Data Engineer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/machine-learning" className="nav-link">
            Machine Learning
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mean-stack-development" className="nav-link">
            Mean Stack Development
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/business-analyst" className="nav-link">
            Business Analyst
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cyber-security" className="nav-link">
            Cyber Security
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;