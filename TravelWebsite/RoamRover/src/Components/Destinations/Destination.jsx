// import React from 'react'
import './Destination.css'
import { Link } from "react-router-dom"
const Destination = () => {
  return (
    <>
    <div id="dest_mainContainer">
      <div id="dest_top">
        <div id="dest_topContent">
        <h2>Dream Destinations</h2>
        <h5>You’ve probably got one or two of these destinations on your list of dream vacays. What can we say? People love them—and for very good reason.</h5>
        </div>
      </div>
      <div id="dest_bottom">
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest1'>
          </div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>1.</h4>
            <h3>Paris, France</h3>
            </div>
          <div className='dest_detail'>
           <p>Experience romance amidst iconic landmarks like the Eiffel Tower and Louvre Museum, indulge in gourmet cuisine, and stroll along the Seine River.</p>
            </div>
          <div className='dest_button'>
           <Link to="/paris"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image'id='dest2'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>2.</h4>
            <h3>Kyoto, Japan</h3>
            </div>
          <div className='dest_detail'>
           <p>Immerse yourself in traditional Japanese culture with historic temples, serene gardens, and the timeless beauty of geisha districts.</p>
            </div>
          <div className='dest_button'>
          <Link to="/kyoto"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest3'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>3.</h4>
            <h3>Rome, Italy</h3>
            </div>
          <div className='dest_detail'>
           <p>Walk through history in the Eternal City, where ancient ruins like the Colosseum and Vatican City coexist with bustling piazzas and Renaissance masterpieces.</p>
            </div>
          <div className='dest_button'>
          <Link to="/rome"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest4'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>4.</h4>
            <h3>New York City, USA </h3>
            </div>
          <div className='dest_detail'>
           <p>Dive into the vibrant energy of the Big Apple with world-class theater on Broadway, diverse culinary experiences, and iconic sights like Times Square and Central Park.</p>
            </div>
          <div className='dest_button'>
          <Link to="/nyc"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest5'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>5.</h4>
            <h3>Santorini, Greece </h3>
            </div>
          <div className='dest_detail'>
           <p>Discover the stunning beauty of Cycladic architecture against the backdrop of breathtaking sunsets, crystal-clear waters, and volcanic beaches.</p>
            </div>
          <div className='dest_button'>
          <Link to="/santorini"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest6'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>6.</h4>
            <h3>Jaipur, India</h3>
            </div>
          <div className='dest_detail'>
           <p>Known as the Pink City, Jaipur is famous for its historic forts, palaces, and vibrant culture. Explore the majestic Amber Fort, City Palace, and Hawa Mahal (Palace of Winds). </p>
            </div>
          <div className='dest_button'>
          <Link to="/jaipur"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest7'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>7.</h4>
            <h3>Machu Picchu, Peru</h3>
            </div>
          <div className='dest_detail'>
           <p>Trek through the Andes Mountains to uncover the mysteries of this ancient Inca citadel, marveling at its architectural wonders and panoramic mountain views.</p>
            </div>
          <div className='dest_button'>
          <Link to="/machupicchu"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest8'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>8.</h4>
            <h3>Bali, Indonesia</h3>
            </div>
          <div className='dest_detail'>
           <p>Find tranquility in the Island of the Gods with lush rice terraces, sacred temples, vibrant markets, and idyllic beaches perfect for surfing and relaxation.</p>
            </div>
          <div className='dest_button'>
          <Link to="/bali"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest9'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>9.</h4>
            <h3>Cape Town, South Africa</h3>
            </div>
          <div className='dest_detail'>
           <p> Experience the diversity of South Africa with stunning landscapes, from Table Mountain to the Cape Winelands, along with vibrant culture and wildlife.</p>
            </div>
          <div className='dest_button'>
          <Link to="/capetown"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest10'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>10.</h4>
            <h3>Istanbul, Turkey </h3>
            </div>
          <div className='dest_detail'>
           <p>Explore the meeting point of East and West, where centuries-old mosques, bustling bazaars, and palaces tell tales of its rich history and cultural heritage.</p>
            </div>
          <div className='dest_button'>
          <Link to="/istanbul"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest11'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>11.</h4>
            <h3>Venice, Italy</h3>
            </div>
          <div className='dest_detail'>
           <p>Lose yourself in the enchanting maze of canals and bridges, admiring the grandeur of St. Marks Square, historic palaces, and the artistry of Venetian glass.</p>
            </div>
          <div className='dest_button'>
          <Link to="/venice"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest12'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>12.</h4>
            <h3>Queenstown, New Zealand</h3>
            </div>
          <div className='dest_detail'>
           <p>Embark on thrilling adventures amidst the stunning landscapes of the Southern Alps, from bungee jumping and skiing to cruising on Milford Sound.</p>
            </div>
          <div className='dest_button'>
          <Link to="/queenstown"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest13'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>13.</h4>
            <h3>Prague, Czech Republic</h3>
            </div>
          <div className='dest_detail'>
           <p>Step into a fairytale city with its Gothic spires, medieval streets, and charming squares, where history comes alive in its castles, bridges, and astronomical clock.</p>
            </div>
          <div className='dest_button'>
          <Link to="/prague"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest14'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>14.</h4>
            <h3>Bora Bora, French Polynesia</h3>
            </div>
          <div className='dest_detail'>
           <p>Surrender to luxury in overwater bungalows surrounded by turquoise lagoons, coral reefs teeming with marine life, and the tranquility of paradise.</p>
            </div>
          <div className='dest_button'>
          <Link to="/borabora"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest15'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>15.</h4>
            <h3>Dubai, UAE</h3>
            </div>
          <div className='dest_detail'>
           <p>Experience the epitome of modern luxury with towering skyscrapers, extravagant shopping malls, desert adventures, and cultural gems like the Burj Khalifa and Dubai Museum.</p>
            </div>
          <div className='dest_button'>
          <Link to="/dubai"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest16'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>16.</h4>
            <h3>Barcelona, Spain </h3>
            </div>
          <div className='dest_detail'>
           <p>Immerse yourself in the vibrant spirit of Catalonia with the architectural wonders of Antoni Gaudí, lively street scenes, and Mediterranean beaches.</p>
            </div>
          <div className='dest_button'>
          <Link to="/barcelona"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest17'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>17.</h4>
            <h3>Maldives</h3>
            </div>
          <div className='dest_detail'>
           <p>Indulge in ultimate relaxation in private island resorts surrounded by pristine white beaches, azure waters, and vibrant coral reefs teeming with marine biodiversity.</p>
            </div>
          <div className='dest_button'>
          <Link to="/maldives"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest18'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>18.</h4>
            <h3>Rio de Janeiro, Brazil</h3>
            </div>
          <div className='dest_detail'>
           <p>Join the rhythm of samba in the vibrant streets, soak up the sun on iconic beaches like Copacabana, and marvel at the panoramic views from Sugarloaf Mountain.</p>
            </div>
          <div className='dest_button'>
          <Link to="/rio"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest19'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>19.</h4>
            <h3>Cairo, Egypt</h3>
            </div>
          <div className='dest_detail'>
           <p> Explore the land of pharaohs and pyramids, where ancient wonders like the Great Pyramids of Giza, Sphinx, and Egyptian Museum reveal millennia of history.</p>
            </div>
          <div className='dest_button'>
          <Link to="/cairo"><button>Explore</button></Link>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest20'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>20.</h4>
            <h3>Sydney, Australia</h3>
            </div>
          <div className='dest_detail'>
           <p>Discover the iconic Sydney Opera House and Harbour Bridge, relax on Bondi Beach, and explore the natural beauty of the Blue Mountains and Royal National Park.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest21'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>21.</h4>
            <h3>Amsterdam, Netherlands</h3>
            </div>
          <div className='dest_detail'>
           <p> Wander along picturesque canals, visit world-class museums like the Van Gogh Museum, and experience the vibrant culture of cycling and cozy cafes.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest22'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>22.</h4>
            <h3>Petra, Jordan</h3>
            </div>
          <div className='dest_detail'>
           <p>Journey into the ancient city carved into rose-red cliffs, marveling at its architectural wonders like the Treasury and Monastery, while soaking in the desert landscape.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest23'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>23.</h4>
            <h3>Florence, Italy</h3>
            </div>
          <div className='dest_detail'>
           <p>Immerse yourself in Renaissance art and architecture with masterpieces like Michelangelos David and Brunelleschis Dome, and savor Tuscan cuisine in charming piazzas.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest24'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>24.</h4>
            <h3>Banff National Park, Canada</h3>
            </div>
          <div className='dest_detail'>
           <p>Discover the breathtaking beauty of the Canadian Rockies with turquoise lakes, majestic mountains, and abundant wildlife amidst pristine wilderness.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest25'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>25.</h4>
            <h3>Dubrovnik, Croatia</h3>
            </div>
          <div className='dest_detail'>
           <p>Step into a medieval fairy tale with the fortified walls of Old Town, crystal-clear waters of the Adriatic Sea, and picturesque views from atop Mount Srd.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest26'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>26.</h4>
            <h3>Bangkok, Thailand</h3>
            </div>
          <div className='dest_detail'>
           <p>Dive into the vibrant chaos of street markets, temples like Wat Arun and Wat Pho, and indulge in tantalizing street food and traditional Thai massages.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest27'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>27.</h4>
            <h3>Cinque Terre, Italy </h3>
            </div>
          <div className='dest_detail'>
           <p>Hike along rugged coastal trails connecting colorful cliffside villages, soak in panoramic views of the Ligurian Sea, and indulge in fresh seafood and local wine.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        </div>
        <div className='dest_container'>
        <div className='dest'>
          <div className='dest_image' id='dest28'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>28.</h4>
            <h3>Budapest, Hungary</h3>
            </div>
          <div className='dest_detail'>
           <p>Relax in thermal baths like Széchenyi, cruise along the Danube River, and marvel at the architectural beauty of landmarks like the Hungarian Parliament.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest29'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>29.</h4>
            <h3>Great Barrier Reef, Australia </h3>
            </div>
          <div className='dest_detail'>
           <p>Dive into the worlds largest coral reef system, teeming with vibrant marine life, for unforgettable snorkeling and scuba diving experiences.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        <div className='dest'>
          <div className='dest_image' id='dest30'></div>
          <div className='dest_description'>
          <div className='dest_heading'>
            <h4>30.</h4>
            <h3>San Francisco, USA</h3>
            </div>
          <div className='dest_detail'>
           <p>Explore the eclectic neighborhoods, iconic landmarks like the Golden Gate Bridge and Alcatraz Island, and embrace the citys diverse culinary scene.</p>
            </div>
          <div className='dest_button'>
           <button>Explore</button>
            </div>    
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Destination
