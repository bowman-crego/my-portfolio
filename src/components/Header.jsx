import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header() {
  
  return (

    <header className="bg-gray-100 shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <h1 className="text-3xl font-semibold text-gray-800">
            <Link to="/">Bowman</Link>
          </h1>

          {/* Navbar */}
          <NavBar />
        </div>
      </div>
    </header>
        
  );
}

export default Header;
