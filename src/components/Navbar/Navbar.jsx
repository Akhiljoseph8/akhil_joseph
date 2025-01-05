// Home.js
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

  
function Navbar() {
    const location = useLocation(); // Get the current location

    const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const isActive = (path) => location.pathname === path;
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop >= 60);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
    useEffect(() => {
      // Add event listener for scroll
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return  <header
    className={`${navbarExpanded ? 'header-style ' : ''} header fixed-top ${isScrolled ? "bg-white header-style" : ""}`}
    id="site-header"
    style={{ width: "100%", zIndex: 1030 ,paddingLeft:"10px", paddingRight:'10px' }}
  >
      <div className="row">
        <div className="col-md-6 col-7 p-3 pl-5">
          <h2 style={{ fontWeight: 'bold' }} className='toph2'>Akhil Joseph</h2>
        </div>
        <div className="col-md-6 col-5 my-auto">
          <nav className="navbar navbar-expand-lg navbar-white ">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{outline: 'none',boxShadow:'none',border:'none'}}
              id='navbar-toggler'
              onClick={() => setNavbarExpanded(!navbarExpanded)}
            >
              <span className={`toggler-icon ${navbarExpanded ? 'fa-times toggler-icon fa icon-expand' : 'fa-bars toggler-icon  fa icon-expand'}`} id="toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${navbarExpanded ? 'show ' : ''}`} id="navbarScroll">
              <ul className="navbar-nav ms-auto " id="nav">
                <li className="nav-item"><a className={`nav-link ${isActive("/") ? "active" : ""}`} href='/'>Home</a></li>
                <li className="nav-item"><a className={`nav-link ${isActive("/services") ? "active" : ""}`} href="/services">Services</a></li>
                <li className="nav-item"><a className={`nav-link ${isActive("/about") ? "active" : ""}`} href="/about">About me</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>;
}

export default Navbar;
