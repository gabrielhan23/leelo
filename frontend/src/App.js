import React, { useEffect, useState } from 'react';
import Queue from './components/Queue';
import Header from './components/Header';
import Footer from './components/Footer';
import InQueue from './components/InQueue';
import GameWindow from './components/GameWindow';
import Login from './components/Login';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';

function App() {
  const [dark, toggleDark] = useState(""); //need seperate css for every single dark mode and then add a string prop "dark" that is added to every single class name; if in light mode, string will be empty
  const [socket, setSocket] = useState(null);
  
  return (
      <Router>
        <Header dark={dark} toggleDark={() => {
          dark == "dark" ? toggleDark("light") : toggleDark("dark")
          dark == "dark" ? document.body.style.backgroundColor = "#F8F8FD" : document.body.style.backgroundColor = "#2F2F33"
          }}/>
        <Routes>
          <Route path='/' element={<Queue dark={dark} setSocket={setSocket}/>} />
          <Route path='/queue' element={<InQueue dark={dark} socket={socket}/>} />
          <Route path='/game' element={<GameWindow dark={dark} socket={socket}/>} />
          <Route path='/login' element={<Login dark={dark} socket={socket}/>} />
        </Routes>
        <Footer dark={dark}/>
      </Router>
  );
}

export default App;
