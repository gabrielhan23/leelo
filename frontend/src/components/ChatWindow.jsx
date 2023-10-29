import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Row, Container } from 'react-bootstrap';


import UserMessage from './UserMessage'
import SystemMessage from './SystemMessage'
import ChatInputBox from './ChatInputBox'
import { useState, useEffect } from 'react'

export default function ChatWindow({ socket }) {
    useEffect(() => {
        socket.on('')
    });
    // TODO: connect to API
    const messages = [
        {message_id: 1, message_type: 0, sender: "sys", message: "You are on the orange team"},
        {message_id: 2, message_type: 1, sender: "Youngster Joey", message: "gl hf af8q9i fewoiqjq"},
        {message_id: 3, message_type: 1, sender: "Oner", message: "jungle gap"},
        {message_id: 4, message_type: 1, sender: "Youngster Joey", message: "lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 5, message_type: 0, sender: "Youngster Joey", message: "dolor sit amet lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 1, message_type: 0, sender: "sys", message: "You are on the orange team"},
        {message_id: 2, message_type: 1, sender: "Youngster Joey", message: "gl hf af8q9i fewoiqjq"},
        {message_id: 3, message_type: 1, sender: "Oner", message: "jungle gap"},
        {message_id: 4, message_type: 1, sender: "Youngster Joey", message: "lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 5, message_type: 0, sender: "Youngster Joey", message: "dolor sit amet lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 1, message_type: 0, sender: "sys", message: "You are on the orange team"},
        {message_id: 2, message_type: 1, sender: "Youngster Joey", message: "gl hf af8q9i fewoiqjq"},
        {message_id: 3, message_type: 1, sender: "Oner", message: "jungle gap"},
        {message_id: 4, message_type: 1, sender: "Youngster Joey", message: "lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 5, message_type: 0, sender: "Youngster Joey", message: "dolor sit amet lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 1, message_type: 0, sender: "sys", message: "You are on the orange team"},
        {message_id: 2, message_type: 1, sender: "Youngster Joey", message: "gl hf af8q9i fewoiqjq"},
        {message_id: 3, message_type: 1, sender: "Oner", message: "jungle gap"},
        {message_id: 4, message_type: 1, sender: "Youngster Joey", message: "lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
        {message_id: 5, message_type: 0, sender: "Youngster Joey", message: "dolor sit amet lorem ipsum qioqjoi qweiof oiqef qif wqoe"},
    ]

    return (
        <div>
            <Container className="chat-window">            
                {
                    messages.map((message) => 
                        message.message_type == 0 
                        ? <SystemMessage key={message.message_id} sender={message.sender} message={message.message}/>
                        : <UserMessage key={message.message_id} sender={message.sender} message={message.message}/> 
                    )
                }
            </Container>
            <ChatInputBox/>
        </div>
    )
}