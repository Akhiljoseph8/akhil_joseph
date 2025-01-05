// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
    return (
      <>
     
        <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
        <Footer/>
        </>
    );
}

export default App;
