import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import ChatWindow from './ChatWindow';
import CodeWindow from './CodeWindow';

export default function GameWindow() {
    return (
        <div className="game-window"> 
            <ChatWindow/> 
            <CodeWindow/>
        </div>
    )
}