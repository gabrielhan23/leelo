import React, {useState, useEffect} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link, redirect } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';

function Queue() {
    const [time, setTime] = useState(0);
    const [playerCount, updatePlayerCount] = useState(1);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (playerCount < 4) {
          // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
          intervalId = setInterval(() => setTime(time + 1), 1000);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);
    
    if (playerCount == 5) {
        updatePlayerCount(6);
        window.location.href = "game";
    }
    if (playerCount >= 4) {
        if (playerCount == 4) {
            updatePlayerCount(5); //temp just to get the timer to start running while still rendering
        }
        return (
            //this should not be a link; change eventually to a div or the col/row thing, and have buttons in the div
            //the onMouseOver is temp, you can change it later
            <div className="in-queue"><div className="gamefound">game found, loading...</div><div className="player-counter"><PlayerCounter players={playerCount} /></div></div>
        );
    } else {
        return ( 
            <div className="in-queue"><div className="timer">{Math.floor(time / 60)}:{time % 60 < 10 ? "0" : ""}{time % 60}</div><div className="inqueue-text">in queue</div><div className="player-counter"><PlayerCounter players={playerCount} /></div></div>
        )
        //{Math.floor(Time / 60) < 10 ? "0" : ""}
    }
  }
  
  export default Queue;
  