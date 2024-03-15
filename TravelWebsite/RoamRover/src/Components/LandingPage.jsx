// import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
const LandingPage = () => {
    useEffect(()=>{
        let nav_container=document.getElementById('nav_container');
        let footer_container=document.getElementById('footer_container');
        console.log('nav_container', nav_container);
        nav_container.style.display='none';
        footer_container.style.display='none';
        
    })

  return (
    <>
    <div id="LandingPage">
        <div id="mainContainer">
            <h3 id="landing_h3">Welcome to</h3>
            <h1 id="landing_h1">RoamRover</h1>
            <button id="landing_btn"><Link to='/home' id='start'>Start Exploring <i className='bx bxs-chevrons-right'></i></Link></button>
        </div>
    </div>
    </>
  )
}

export default LandingPage