// import React from 'react'
import { useEffect } from 'react';
import './Home.css'
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
    <>
    <div id="home_container">
    <div id="home_top">
        <div id="home_topContent">
        <h2>Embark on a journey of endless discovery with RoamRover – Where every destination is an adventure waiting to be explored.</h2>
        </div>
      </div>

    <div id="home_bottom">
      {/* {---------------------------------------Div 1--------------------------------------} */}
      <div className='topSpot'>
        <div className='topSpot_top'>
          <h2>Traveler{'\''}s Top Spots</h2>
        </div>
        <div className='topSpot_bottom'>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t1'></div>
              <div className='topSpotsH'><h4>Paris</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t2'></div>
              <div className='topSpotsH'> <h4>Rome</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t3'></div>
              <div className='topSpotsH'> <h4>Bali</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t4'></div>
              <div className='topSpotsH'> <h4>Santorini</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t5'></div>
              <div className='topSpotsH'> <h4>NYC</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t6'></div>
              <div className='topSpotsH'> <h4>Maldives</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t7'></div>
              <div className='topSpotsH'> <h4>Barcelona</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t8'></div>
              <div className='topSpotsH'> <h4>Bangkok</h4></div>
            </div>
        </div>
      </div>
      {/* {-------------------------------------Div 2---------------------------------------------} */}
      <div className='topSpot'>
        <div className='topSpot_top'>
          <h2>Popular Picks WorldWide</h2>
        </div>
        <div className='topSpot_bottom'>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t11'></div>
              <div className='topSpotsH'><h4>Amsterdam</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t12'></div>
              <div className='topSpotsH'> <h4>Machu Picchu</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t13'></div>
              <div className='topSpotsH'> <h4>Maldives</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t14'></div>
              <div className='topSpotsH'> <h4>Prague</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t15'></div>
              <div className='topSpotsH'> <h4>Venice</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t16'></div>
              <div className='topSpotsH'> <h4>Sydney</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t17'></div>
              <div className='topSpotsH'> <h4>Cape Town</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t18'></div>
              <div className='topSpotsH'> <h4>Cairo</h4></div>
            </div>
        </div>
      </div>
      {/* {------------------------------------Div 3-----------------------------------------------------} */}
      <div className='topSpot'>
        <div className='topSpot_top'>
          <h2>Bucket List Countries</h2>
        </div>
        <div className='topSpot_bottom'>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t21'></div>
              <div className='topSpotsH'><h4>Thailand</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t22'></div>
              <div className='topSpotsH'> <h4>India</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t23'></div>
              <div className='topSpotsH'> <h4>Japan</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t24'></div>
              <div className='topSpotsH'> <h4>Greece</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t25'></div>
              <div className='topSpotsH'> <h4>Italy</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t26'></div>
              <div className='topSpotsH'> <h4>Iceland</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t27'></div>
              <div className='topSpotsH'> <h4>Australia</h4></div>
            </div>
            <div className='topSpots'>
              <div className='topSpotsImg' id='t28'></div>
              <div className='topSpotsH'> <h4>Peru</h4></div>
            </div>
        </div>
      </div>
      {/* {} */}
      <div className='months'>
        <div className='months_top'>
          <h2>Your Year-Around Adventure Guide</h2>
        </div>
        <div className='months_bottom'>
            <div className='monDiv'>
            <div className='mon'>
              <div className='monImg' id='Jan'></div>
              <div className='monH'><h4>Jan</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Feb'></div>
              <div className='monH'><h4>Feb</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Mar'></div>
              <div className='monH'><h4>Mar</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Apr'></div>
              <div className='monH'><h4>Apr</h4></div>
            </div>
            </div>
            <div className='monDiv'>
            <div className='mon'>
              <div className='monImg' id='May'></div>
              <div className='monH'><h4>May</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Jun'></div>
              <div className='monH'><h4>Jun</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Jul'></div>
              <div className='monH'><h4>Jul</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Aug'></div>
              <div className='monH'><h4>Aug</h4></div>
            </div>
            </div>
            <div className='monDiv'>
            <div className='mon'>
              <div className='monImg' id='Sept'></div>
              <div className='monH'><h4>Sept</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Oct'></div>
              <div className='monH'><h4>Oct</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Nov'></div>
              <div className='monH'><h4>Nov</h4></div>
            </div>
            <div className='mon'>
              <div className='monImg' id='Dec'></div>
              <div className='monH'><h4>Dec</h4></div>
            </div>
            </div>
        </div>
      </div>
      </div>  
    </div>
    </>
  )
}

export default Home