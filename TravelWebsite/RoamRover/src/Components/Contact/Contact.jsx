// import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
   <>
   <div id="contact_container">
    <h1>Contact Us</h1>
    <form id="contact_form">
      <label>Name</label>
      <input type="text" placeholder="Enter Your Name" />
      <label>Email</label>
      <input type="email" placeholder="Enter Your Email ID" />
      <label>Write your query</label>
      <textarea cols="30" rows="15" placeholder="I want to know..."></textarea>
      <button>Submit</button>
    </form>
   </div>
   </>
  )
}

export default Contact