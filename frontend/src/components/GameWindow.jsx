import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

import ChatWindow from './ChatWindow';
import CodeWindow from './CodeWindow';

export default function GameWindow() {
    const team = "orange";
    const { state } = useLocation();
    
    return (
        <div className="game-window"> 
            <ChatWindow team={team}/> 
            <CodeWindow problemStatement={state.problemStatement}/>
        </div>
    )
}