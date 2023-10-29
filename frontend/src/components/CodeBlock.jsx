import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default function CodeBlock(props) {
    const { value, onChange, readOnly } = props

    return (
        <div className="code-block-div">
            <textarea className="code-block-input" value={value} onChange={onChange} readOnly={readOnly}/>
        </div>

    )
}