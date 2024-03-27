// import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Destination from './Components/Destinations/Destination'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage'
import Aboutus from './Components/AboutUs/Aboutus'
import Paris from './Components/PlacesPage/Paris'
import Kyoto from './Components/PlacesPage/Kyoto'
import Rome from './Components/PlacesPage/Rome'
import NYC from './Components/PlacesPage/NYC'
import Santorini from './Components/PlacesPage/Santorini'
import Amsterdam from './Components/PlacesPage/Amsterdam'
import Bali from './Components/PlacesPage/Bali'
import Banff from './Components/PlacesPage/Banff'
import Bangkok from './Components/PlacesPage/Bangkok'
import Barcelona from './Components/PlacesPage/Barcelona'
import Budapest from './Components/PlacesPage/Budapest'
import Cairo from './Components/PlacesPage/Cairo'
import CapeTown from './Components/PlacesPage/CapeTown'
import Cinque from './Components/PlacesPage/Cinque'
import Dubai from './Components/PlacesPage/Dubai'
import Dubrovnik from './Components/PlacesPage/Dubrovnik'
import Florence from './Components/PlacesPage/Florence'
import Great from './Components/PlacesPage/Great'
import Istanbul from './Components/PlacesPage/Istanbul'
import Jaipur from './Components/PlacesPage/Jaipur'
import MachuPichu from './Components/PlacesPage/MachuPichu'
import Petra from './Components/PlacesPage/Petra'
import Error from './Components/Error'
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
    <Route path='*'element={<Error/>}/>
    <Route path='/aboutUs' element={<Aboutus/>}/>
    <Route path='/paris' element={<Paris/>}/>
    <Route path='/kyoto' element={<Kyoto/>}/>
    <Route path='/rome' element={<Rome/>}/>
    <Route path='/nyc' element={<NYC/>}/>
    <Route path='/santorini' element={<Santorini/>}/>
    <Route path='/amsterdam' element={<Amsterdam/>}/>
    <Route path='/bali' element={<Bali/>}/>
    <Route path='/banff' element={<Banff/>}/>
    <Route path='/bangkok' element={<Bangkok/>}/>
    <Route path='/barcelona' element={<Barcelona/>}/>
    <Route path='/budapest' element={<Budapest/>}/>
    <Route path='/cairo' element={<Cairo/>}/>
    <Route path='/capeTown' element={<CapeTown/>}/>
    <Route path='/cinque' element={<Cinque/>}/>
    <Route path='/dubai' element={<Dubai/>}/>
    <Route path='/dubrovnik' element={<Dubrovnik/>}/>
    <Route path='/florence' element={<Florence/>}/>
    <Route path='/great' element={<Great/>}/>
    <Route path='/istanbul' element={<Istanbul/>}/>
    <Route path='/jaipur' element={<Jaipur/>}/>
    <Route path='/machupicchu' element={<MachuPichu/>}/>
    <Route path='/petra' element={<Petra/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App