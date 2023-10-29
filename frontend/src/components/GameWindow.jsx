import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

import ChatWindow from './ChatWindow';
import CodeWindow from './CodeWindow';

export default function GameWindow({ socket }) {
    const team = "orange";
    const { state } = useLocation();

    useEffect(() => {

    }, [])
    
    return (
        <div className="game-window"> 
            <ChatWindow socket={socket} team={team}/> 
            <CodeWindow socket={socket} problemStatement={state?.problemStatement}/>
        </div>
    )
}