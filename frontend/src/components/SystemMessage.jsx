import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function SystemMessage(props) {
    const {
        message_id,
        message
    } = props;

    console.log(message)

    return (
        <div className="system-message"> {message} </div>
    )
}