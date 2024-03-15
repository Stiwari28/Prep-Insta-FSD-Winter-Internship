// import React from 'react'
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
const Home = () => {
  useEffect(()=>{
    let nav_container=document.getElementById('nav_container');
    let footer_container=document.getElementById('footer_container');
    console.log('nav_container', nav_container);
    nav_container.style.display='block';
    footer_container.style.display='block';
    
})
  return (
    <div>Home</div>
  )
}

export default Home