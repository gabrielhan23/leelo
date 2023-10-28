import React from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';


function Queue() {
    return (
        // <Pressable className="center"
        // onPress={() => console.log(window.innerWidth, window.innerHeight)}> 
        //     <div className="Queue_Button">queue up</div>
        // </Pressable>
        <Link to="/queue" onMouseOver={()=>console.log('test')}><div className="queue-button">queue up</div></Link>
    );
  }
  
  export default Queue;
  