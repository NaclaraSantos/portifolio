// src/App.js
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/projects';
import Footer from './components/footer';


function App() {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
