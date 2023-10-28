import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import leet from '../imgs/leet.png';
import sun from '../imgs/Sun.png';
import login from '../imgs/User_alt.png';


function Header() {
    return (
        <nav className="navbar">
            <div className="Header">
                <Link to="/" className="header-logo"><img src={leet} className="logo-style"/></Link>
                <Link to="/login" className="login-logo"><img src={login} className="login"/></Link>
                <Link className="darktoggle-logo" onClick={() => console.log("switch to dark")}><img src={sun} className="darktoggle"/></Link>
            </div>
        </nav>
    );
  }
  
  export default Header;
  