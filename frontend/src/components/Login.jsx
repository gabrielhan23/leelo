import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';

function Login() {
    return(<input type="text" className="login" placeholder="username"></input>)
  }
  
  export default Login;
  