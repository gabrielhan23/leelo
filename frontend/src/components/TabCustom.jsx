import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default function TabCustom(props) {
    const { tabSelect, index, title, onTabClick } = props

    var className = "tab-custom"

    if (index == 0) {
        className += " left"
    }
    
    if (tabSelect == index) {
        className += " open"
    }

    return (
        <button className={className} index={index} onClick={ onTabClick }>
            {title}
        </button>
    )
}