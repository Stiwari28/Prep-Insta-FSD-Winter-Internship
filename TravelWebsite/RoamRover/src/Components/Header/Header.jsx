// import React from 'react'
import { Link } from "react-router-dom"
import './Header.css';
const Header = () => {
  return (
    <>
    <div id="nav_container">
    <div id="WebsiteName">
      <h1>RoamRover</h1>
    </div>
    <div id="Nav_items">
    <Link className="home" to="/home">Home</Link>
    <Link className="destination" to="/destination">Destinations</Link>
    <Link className="contact" to="/contact">Contact</Link>
    </div>
    </div>
    </>
  )
}

export default Header