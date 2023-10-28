import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import UserMessage from './UserMessage'

export default function ChatWindow() {
    return (
        <div className="chat-window"> <UserMessage /> </div>
    )
}