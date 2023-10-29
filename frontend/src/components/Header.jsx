import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import leet from '../imgs/leet.png';
import sun from '../imgs/Sun.png';
import { Sun, Moon, Person } from '../svg/svg.jsx';
import login from '../imgs/User_alt.png';


function Header({dark, toggleDark}) {
    const userName = 'StupidIdiot'; //todo: link this with backend? idk how to do google api stuff
    return (
        <nav className="navbar">
            <div className={"header " + dark + "1"}>
                <Link to="/" className="header-logo"><img src={leet} className="logo-style"/></Link>
                <div className={"header-text " + dark + "3"}>{userName == null ? "Not logged in" : "Logged in as " + userName}</div>
                <Link to="/login" className="login-logo"><Person dark={dark}/></Link>
                <Link className="darktoggle-logo" onClick={() => toggleDark()}>{dark == "dark" ? <Moon /> : <Sun />}</Link>
            </div>
        </nav>
    );
  }
  
  export default Header;
  