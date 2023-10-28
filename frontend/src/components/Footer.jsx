import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Footer() {
    return (
        <nav className="navbar">
            <div className="Footer">
                <Link to="/login" className="navbar-logo"><div>test</div></Link>
            </div>
        </nav>
    );
  }
  
  export default Footer;
  