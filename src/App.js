import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import About from './component/about/About';
import Home from './component/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactMe from './component/ContactMe';
import Pre from './component/Pre';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
      {load ? (
        <Pre load={load} />
      ) : (
        <div className="App" id="scroll">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
