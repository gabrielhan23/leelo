import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Footer({dark}) {
    return (
        <nav className="navbar">
            <div className={"footer " + dark + "1"}>
                <Link to="/login" className="navbar-logo"><div></div></Link>
            </div>
        </nav>
    );
  }
  
  export default Footer;
  