import React, {useState, useEffect} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link, redirect, useNavigate } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';
import socket from "../socket"

function InQueue({dark}) {
    const [time, setTime] = useState(0);
    const [playerCount, updatePlayerCount] = useState(1);
    const [uuid, setUuid] = useState(1);
    const navigate = useNavigate();

    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        console.log('hi');
        // fetch('http://localhost:8080/api/login', {
        //     // "no-cors": true,
        //     mode: 'no-cors',
        //     credentials: 'include'
        // // }).then(() => {
        // //     console.log('finished')
        // //     window.location.href = 'http://localhost:8080/api/login'
        // })
        fetch('http://localhost:8080/api/player', {
            mode: 'cors',
            credentials: 'include',
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //   },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.success)
            if (!data.success) {
                navigate('/login')
            }
            setUuid(data.uuid);
            console.log(socket)
            socket.connect()
            socket.emit('queue', data.uuid);
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

        
        
    }, []);

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
        )
    }
  }
  
  export default InQueue;
  