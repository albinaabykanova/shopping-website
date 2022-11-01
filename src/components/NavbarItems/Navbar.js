import React from 'react';
import './Navbar.css';
import { FaWifi } from "react-icons/fa";


export default function Navbar() {
    return (
        <nav className="nav container ">   
          <a href="/" className="nav-logo">
          <FaWifi className="nav-icon" />
              Fashion
          </a>
          <ul >
            <li className="nav-item">
                <a href="/catalogue" className="nav-links">Catalogue</a>
            </li>
            <li className="nav-item">
                <a href="/fashion" className="nav-links">Fashion</a>
            </li>
            <li className="nav-item">
                <a href="/favorite" className="nav-links">Favorite</a>
            </li>
            <li className="nav-item">
                <a href="/lifestyle" className="nav-links">Lifestyle</a>
            </li>
            <li className="nav-item">
                <button className="btn-nav"><a href="/signup">Sign up</a></button>
            </li>
          </ul>
        </nav>
    )
}