import React from 'react';
import Queue from './components/Queue';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="fullscreen">
      <Router>
        <Header />
          <Routes>
            <Route path='/' exact />
          </Routes>
          <Queue />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
