// import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div id='footer_container'>
      <section id='SocialMedia_Links'>
      <div id='SocialMedia_top'>
       <h1>RoamRover</h1>
       <h3>Explore the World with RoamRover</h3>
       </div>
       <div id='SocialMedia_bottom'>
       <p>Follow us</p>
       <p>Facebook, Instagram, Tweeter, YouTube, Pinterest</p>
      </div>
      </section>
      <section id='QuickLinks'>
      <div id='TopDestination'>
       <h3>Top Destinations</h3>
       <p>Paris</p>
       <p>Rome</p>
       <p>Bali</p>
       <p>Santorini</p>
       <p>New York City</p>
       <p>Maldives</p>
       <p>Barcelona</p>
       <p>Bangkok</p>
       <p>Amsterdam</p>
       <p>Machu Picchu</p>
       </div>
       <div id='TravelInterest'>
       <h3>Travel Interest</h3>
       <p>Maldives</p>
       <p>Prague</p>
       <p>Venice</p>
       <p>Sydney</p>
       <p>Cape Town</p>
       <p>Cairo</p>
       <p>Iceland</p>
       <p>Spain</p>
      </div>
      <div id='Us'>
       <h3><Link id="au" to='/aboutus'>About Us</Link></h3>
       <h3><Link id="cu" to='/contact'>Contact Us</Link></h3>
      </div>
      </section>
    </div>
    </>
  )
}

export default Footer