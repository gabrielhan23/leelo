import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';


function PlayerCounter({players}) {
    
    return (<div>{players >= 1 ? "1" : "0"}{players >= 2 ? "1" : "0"}{players >= 3 ? "1" : "0"}{players >= 4 ? "1" : "0"}</div>);
  }
  
  export default PlayerCounter;
  