// import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Destination from './Components/Destinations/Destination'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage'
import Aboutus from './Components/AboutUs/Aboutus'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/destination' element={<Destination/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/aboutUs' element={<Aboutus/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App