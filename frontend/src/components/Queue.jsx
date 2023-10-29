import React, { useState } from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import '../App.css';


<<<<<<< HEAD
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
=======
function Queue({dark}) {
    const [hover, toggleHover] = useState(false);
    console.log(hover);
    return (
        <Link to="/queue" onMouseEnter={()=>toggleHover(!hover)} onMouseLeave={()=>toggleHover(!hover)}><div className={hover ? "queue-button-hover " + dark + "1" : "queue-button " + dark + "1"}><p className={dark + "3"}>queue up</p></div></Link>
>>>>>>> 803940a7ff05e32d76c9803e3c081b74c2c6c61a
    );
  }
  
  export default Queue;
  