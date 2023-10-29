import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import ChatWindow from './ChatWindow';
import CodeWindow from './CodeWindow';

export default function GameWindow() {
    const team = "orange";
    return (
        <div className="game-window"> 
            <ChatWindow team={team}/> 
            <CodeWindow/>
        </div>
    )
}