import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect, useRef } from 'react';


import TabBar from './TabBar';
import CodeBlock from './CodeBlock';
import Tests from './Tests';

export default function CodeWindow() {
    const timer = useRef(timer);
    
    const [text0, updateText0] = useState("")
    const [text1, updateText1] = useState("")
    const [text2, updateText2] = useState("")
    const [text3, updateText3] = useState("")

    const [passed, updatePassed] = useState(0);
    const [tab_select, updateTab] = useState(0);
    
    var total = 15;

    function onTabClick(event) {
        updateTab(event.target.getAttribute("index"))
        console.log("hello")
        console.log(tab_select)
    }

    useEffect(() => {pullProblemStatement()})
    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => pullPartnerCode(), 2000);
        return () => clearInterval(intervalId);
    })
    

    async function pullProblemStatement() {
        console.log("pull at start")
        updateText0("We are trying to reach you about your car's extended warrantee")
    }

    async function pullPartnerCode() {
        console.log("pull every two seconds")
        updateText3("hi")
    }

    function pushText1(event) {
        updateText1(event.target.value);
    }

    function pushText2(event) {
        updateText2(event.target.value);
    }

    function runTests() {
        updatePassed(passed + 1);
    }

    return (
        <div className="code-window"> 
            <TabBar tabSelect={tab_select} onTabClick={onTabClick}/>
            {tab_select == 0 && <CodeBlock value={text0} readOnly={true} />}
            {tab_select == 1 && <CodeBlock value={text1} onChange={pushText1}/>}
            {tab_select == 2 && <CodeBlock value={text2} onChange={pushText2}/>}
            {tab_select == 3 && <CodeBlock value={text3} readOnly={true}/>}
            <Tests passed={passed} total={total} runTests={runTests}/>
        </div>
    )
}