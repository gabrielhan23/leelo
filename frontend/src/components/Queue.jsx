import React from 'react';
import {
    Pressable,
} from 'react-native';
import '../App.css';


function Queue() {
    return (
        <Pressable className="center"
        onPress={() => console.log(window.innerWidth, window.innerHeight)}> 
            <div className="Queue_Button">queue up</div>
        </Pressable>

    );
  }
  
  export default Queue;
  