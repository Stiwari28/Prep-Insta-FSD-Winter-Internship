// import React from 'react'

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    
    useEffect(()=>{
        let nav_container=document.getElementById('nav_container');
        let footer_container=document.getElementById('footer_container');
        console.log('nav_container', nav_container);
        nav_container.style.display='none';
        footer_container.style.display='none';
        
    })
  return (
    <>
    <div style={{margin:30, textAlign:'center'}}>
    <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" height='400px' width='800px' ></img>
    </div>
    <div style={{textAlign:'center'}}>
    <button style={{padding: 5, backgroundColor:'black', border:'None'}}><Link  to="/home"  className="homeButton" style={{textDecoration:'None', color:'white'}}>Go back to Home Page</Link></button>
    </div>
    </>
  )
}

export default Error