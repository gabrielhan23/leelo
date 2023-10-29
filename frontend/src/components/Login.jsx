import React, {useState} from 'react';
import {
    Pressable,
} from 'react-native';
import { Link } from 'react-router-dom';
import '../App.css';
import PlayerCounter from './PlayerCounter';

function Login({dark}) {
    const handleLogin = () => {
        console.log('trying to login');
        // window.location.href = 'http://localhost:8080/api/login'
        fetch('http://localhost:8080/api/login', {
            // "no-cors": true,
            mode: 'no-cors',
            credentials: 'include'
        }).then(() => {
            console.log('finished')
            window.location.href = 'http://localhost:8080/api/login'
        })
    }
    
    return (
        <div className={"login-page " + dark + "1"} onClick={handleLogin}>
            <button className={"login " + dark + "2"} >Login</button>
        </div>
    )
  }
  
  export default Login;
  