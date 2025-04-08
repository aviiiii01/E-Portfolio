import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="bg-[#f8f8f8] p-8 sticky top-0 shadow-lg">
      <nav className="container mx-auto text-md">
        <ul className="flex space-x-4 justify-between">
          <li className="flex items-center space-x-3">
            <img className="w-13" src={logo} alt="Logo" />
            <span>
              <b className="font-semibold text-2xl">Avinash Lodhi</b> / Python Developer
            </span>
          </li>
          <div className="flex items-center space-x-6">
            <li>
              <Link to="/" className="text-blue-500 hover:text-gray-400">
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-[#8e7dbe] hover:text-gray-400">
                RESUME
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-[#8e7dbe] hover:text-gray-400">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#8e7dbe] hover:text-gray-400">
                CONTACT ME
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;