import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import About from './component/about/About';
import Home from './component/home/Home';
import{BrowserRouter, Route, Routes} from "react-router-dom"
import ContactMe from './component/ContactMe';


function App() {
  const [load, upadateLoad] = useState(true);
  const[dark,setDark]= useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
  <div className={` app${dark&&"dark_mode"}`}>
  {/* <Pre load={load}/> */}
  {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
  <Navbar dark={dark} handleDarkMode={setDark}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
  {/* </div> */}
  </div>
  );
}

export default App;
