import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default function Footer() {
    return (
        <nav className="navbar">
            <div className="footer">
                <Link to="/login" className="navbar-logo"><div></div></Link>
            </div>
        </nav>
    );
}
  