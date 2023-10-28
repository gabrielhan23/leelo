import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';

function Queue() {
    const [Time, setTime] = useState(0);
    const [playerCount, updatePlayerCount] = useState(1);
    if (playerCount == 4) {
        return (
            //this should not be a link; change eventually to a div or the col/row thing, and have buttons in the div
            //the onMouseOver is temp, you can change it later
            <Link to="/game" onMouseOver={()=>setTime(Time + 1)}><div className="in-queue">{Math.floor(Time / 60) < 10 ? "0" : ""}{Math.floor(Time / 60)}:{Time % 60 < 10 ? "0" : ""}{Time % 60}</div></Link>
        );
    } else {
        return ( 
            <div className="in-queue"><div className="timer">{Math.floor(Time / 60)}:{Time % 60 < 10 ? "0" : ""}{Time % 60}</div><div className="inqueue-text">in queue</div><div className="player-counter"><PlayerCounter players={playerCount} /></div></div>
        )
        //{Math.floor(Time / 60) < 10 ? "0" : ""}
    }
  }
  
  export default Queue;
  