import React from 'react'
import './Home.css'

const home = props => 
 <div>
     <h1>
         Search Devs
     </h1>
     <input type="text" id="input-search" placeholder="Type the username here">
     </input>
     <button id="search">Search</button>
 </div>

export default home