import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default function Tests(props) {
    const { passed, total, runTests } = props
    
    return (
        <div className="tests">
            Passed {passed}/{total} tests cases.
            <button className="run-button" onClick={runTests}>Run tests</button>
        </div>
    )
}