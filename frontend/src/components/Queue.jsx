import React, { useState } from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import '../App.css';


function Queue({ setSocket }) {
    const [hover, toggleHover] = useState(false);
    console.log(hover);
    return (
        // <Pressable className="center"
        // onPress={() => console.log(window.innerWidth, window.innerHeight)}> 
        //     <div className="Queue_Button">queue up</div>
        // </Pressable>
        <Link 
            to="/inqueue"
            onMouseEnter={()=>toggleHover(!hover)}
            onMouseLeave={()=>toggleHover(!hover)}
            onClick={() => setSocket(io())}
        >
            <div className={hover ? "queue-button-hover" : "queue-button"}>queue up</div>
        </Link>
    );
  }
  
  export default Queue;
  