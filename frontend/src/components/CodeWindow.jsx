import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function CodeWindow({ socket }) {
    useEffect(() => {
        socket.on('game/type', (data) => {
            console.log(data);
            // update data
        });
    }, [])
    
    return (
        <div className="code-window"> 
            
            
        </div>
    )
}