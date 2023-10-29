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
<<<<<<< HEAD
  const [dark, toggleDark] = useState(0); //need seperate css for every single dark mode and then add a string prop "dark" that is added to every single class name; if in light mode, string will be empty
  const [socket, setSocket] = useState(null);
  
=======
  const [dark, toggleDark] = useState(""); //need seperate css for every single dark mode and then add a string prop "dark" that is added to every single class name; if in light mode, string will be empty
>>>>>>> 803940a7ff05e32d76c9803e3c081b74c2c6c61a
  return (
      <Router>
        <Header dark={dark} toggleDark={() => {
          dark == "dark" ? toggleDark("light") : toggleDark("dark")
          dark == "dark" ? document.body.style.backgroundColor = "#F8F8FD" : document.body.style.backgroundColor = "#2F2F33"
          }}/>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Queue setSocket={setSocket} />} />
          <Route path='/inqueue' element={<InQueue socket={socket}/>} />
          <Route path='/game' element={<GameWindow socket={socket}/>} />
          <Route path='/login' element={<Login/>} />
=======
          <Route path='/' element={<Queue dark={dark}/>} />
          <Route path='/queue' element={<InQueue dark={dark}/>} />
          <Route path='/game' element={<GameWindow dark={dark}/>} />
          <Route path='/login' element={<Login dark={dark}/>} />
>>>>>>> 803940a7ff05e32d76c9803e3c081b74c2c6c61a
        </Routes>
        <Footer dark={dark}/>
      </Router>
  );
}

export default App;
