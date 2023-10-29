import React, { useState } from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';


function Queue() {
    const [hover, toggleHover] = useState(false);
    console.log(hover);
    return (
        <Link to="/queue" onMouseEnter={()=>toggleHover(!hover)} onMouseLeave={()=>toggleHover(!hover)}><div className={hover ? "queue-button-hover" : "queue-button"}>queue up</div></Link>
    );
  }
  
  export default Queue;
  