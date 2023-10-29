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
  const [dark, toggleDark] = useState(0); //need seperate css for every single dark mode and then add a string prop "dark" that is added to every single class name; if in light mode, string will be empty
  const [socket, setSocket] = useState(null);
  
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Queue setSocket={setSocket} />} />
          <Route path='/inqueue' element={<InQueue socket={socket}/>} />
          <Route path='/game' element={<GameWindow socket={socket}/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        {/* <Queue /> */}
        <Footer />
      </Router>
  );
}

export default App;
