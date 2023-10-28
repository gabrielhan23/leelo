import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';


function Queue() {
    const [Time, setTime] = useState(0);
    const [playerCount, updatePlayerCount] = useState(1);
    return (
        //this should not be a link; change eventually to a div or the col/row thing, and have buttons in the div
        //the onMouseOver is temp, you can change it later
        <Link to="/game" onMouseOver={()=>setTime(Time + 1)}><div className="in_queue">{Math.floor(Time / 60) < 10 ? "0" : ""}{Math.floor(Time / 60)}:{Time % 60 < 10 ? "0" : ""}{Time % 60}</div></Link>
    );
  }
  
  export default Queue;
  