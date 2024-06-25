import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Particle from './component/Particle';
import Pre from './component/Pre';
import Projects from './component/Projects';
import About from './component/about/About';
import Home from './component/home/Home';
import{BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
  <>
  {/* <Pre load={load}/> */}
  {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
  {/* </div> */}
  </>
  );
}

export default App;