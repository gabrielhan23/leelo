import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect, useRef } from 'react';

export default function ChatInputBox(props) {
    const {
        text
    } = props;

    function handleSubmitMessage() {
        const form = document.getElementById("form");
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const message = formJson.message
        console.log(message);

        form.reset()
    }

    function onEnterPress(e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleSubmitMessage()
        }
    }

    return (
        <form id="form" className="chat-input-div" onSubmit={handleSubmitMessage}> <textarea name="message" className="chat-input" placeholder="Start typing here..." onKeyDown={onEnterPress}/> </form>
    )
}