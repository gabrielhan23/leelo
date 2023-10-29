import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';
import { Queue_Empty, Queue_Fill } from '../svg/svg';


function PlayerCounter({players, dark}) {
    
    return (<div className="counter-padding">{players >= 1 ? <Queue_Fill dark={dark}/> : <Queue_Empty dark={dark}/>} {players >= 2 ? <Queue_Fill dark={dark}/> : <Queue_Empty dark={dark}/>} {players >= 3 ? <Queue_Fill dark={dark}/> : <Queue_Empty dark={dark}/>} {players >= 4 ? <Queue_Fill dark={dark}/> : <Queue_Empty dark={dark}/>}</div>);
  }
  
  export default PlayerCounter;
  