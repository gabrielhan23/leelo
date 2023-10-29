import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TabCustom from './TabCustom';


export default function TabBar(props) {
    const { tabSelect, onTabClick } = props;
    const tabs = [0, 1, 2, 3];
    const tab_titles = ["Problem statement", "Orange team submission", "User1's workspace", "User2's workspace"]


    return (
        <div className="tab-bar">
            {tabs.map((tab) => 
                <TabCustom tabSelect={tabSelect} key={tab} index={tab} title={tab_titles[tab]} onTabClick={onTabClick} />
            )}
        </div>
    )
}