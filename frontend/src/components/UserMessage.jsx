import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function UserMessage(props) {
    const {
        message_id,
        message
    } = props;

    console.log(message)

    return (
        <div className="user-message"> {message} </div>
    )
}