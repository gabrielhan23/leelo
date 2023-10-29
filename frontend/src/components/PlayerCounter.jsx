import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';
import { Queue_Empty, Queue_Fill } from '../svg/svg';


function PlayerCounter({players}) {
    
    return (<div className="counter-padding">{players >= 1 ? <Queue_Fill className="playerCounter"/> : <Queue_Empty className="playerCounter"/>} {players >= 2 ? <Queue_Fill className="playerCounter"/> : <Queue_Empty className="playerCounter"/>} {players >= 3 ? <Queue_Fill className="playerCounter"/> : <Queue_Empty className="playerCounter"/>} {players >= 4 ? <Queue_Fill className="playerCounter"/> : <Queue_Empty className="playerCounter"/>}</div>);
  }
  
  export default PlayerCounter;
  