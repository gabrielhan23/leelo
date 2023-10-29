import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import UserMessage from './UserMessage'

export default function ChatWindow(props) {
    const {
        messages
    } = props;
    return (
        <div className="chat-window">            
            {
                messages.map((message) => 
                    <UserMessage message={message}/>
                )
            }
            {/* <UserMessage message="hello"></UserMessage> */}
        </div>
    )
}