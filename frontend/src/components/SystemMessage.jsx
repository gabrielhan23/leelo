import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function SystemMessage(props) {
    const {
        message_id,
        message
    } = props;

    return (
        <div className="system-message"> {message} </div>
    )
}