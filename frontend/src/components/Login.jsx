import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';

function Login({dark}) {
    return(<div className={"login-page " + dark + "1"}><input type="text" className={"login " + dark + "3"} placeholder="username"></input></div>)
  }
  
  export default Login;
  