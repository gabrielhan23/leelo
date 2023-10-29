import React, {useState, useEffect} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link, redirect, useNavigate } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';

<<<<<<< HEAD
function InQueue({ socket }) {
=======
function InQueue({dark}) {

    //use componentdidmount to add self to queue, if neccecary 

>>>>>>> 803940a7ff05e32d76c9803e3c081b74c2c6c61a
    const [time, setTime] = useState(0);
    const [playerCount, updatePlayerCount] = useState(1);
    const navigate = useNavigate();

    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        fetch('/api/player')
        socket.emit('queue');
        socket.on('queue', (v) => {
            updatePlayerCount(v);
        })
        socket.on('game/start', (p) => {
            updatePlayerCount(4);
            setTimeout(function() {
                navigate('/game', { state: { problemStatment: p } });
            }, 2000);
        })
    });

    useEffect(() => {
        let intervalId;
        if (playerCount < 4) {
          // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
          intervalId = setInterval(() => setTime(time + 1), 1000);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);
    
    if (playerCount === 4) {
        return (
<<<<<<< HEAD
            <div className="in-queue">
                <div className="gamefound">
                    game found, loading...
                </div>
                <div className="player-counter">
                    <PlayerCounter players={playerCount} />
                </div>
            </div>
        );
    } else {
        return ( 
            <div className="in-queue">
                <div className="timer">
                    {Math.floor(time / 60)}:{time % 60 < 10 ? "0" : ""}{time % 60}
                </div>
                <div className="inqueue-text">
                    in queue
                </div>
                <div className="player-counter">
                    <PlayerCounter players={playerCount} />
                </div>
            </div>
=======
            //this should not be a link; change eventually to a div or the col/row thing, and have buttons in the div
            //the onMouseOver is temp, you can change it later
            <div className={"in-queue " + dark + "1"}><div className={"gamefound " + dark + "3"}>game found, loading...</div><div className="player-counter"><PlayerCounter players={playerCount} dark={dark}/></div></div>
        );
    } else {
        return ( 
            <div className={"in-queue " + dark + "1"}><div className={"timer " + dark + "3"}>{Math.floor(time / 60)}:{time % 60 < 10 ? "0" : ""}{time % 60}</div><div className="inqueue-text">in queue</div><div className="player-counter"><PlayerCounter players={playerCount} dark={dark}/></div></div>
>>>>>>> 803940a7ff05e32d76c9803e3c081b74c2c6c61a
        )
    }
  }
  
  export default InQueue;
  