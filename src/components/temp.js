
import React, { useState } from "react"
import "./Navbar.css";

export default function Navbar(){
    const [isExpanded, toggleExpansion] = useState(false)
    return(
<div>
  <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
    <img className = "Logo" src= {require("../images/DSCLogo.png")} alt= "Logo" />
    </div>
    <div class="block lg:hidden">
    <button onClick={() => toggleExpansion(!isExpanded)} class="transition duration-700 ease-in-out hover:bg-gray-300 rounded  flex items-center px-3 py-2 text-gray-700">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className= {`${ isExpanded ? `block` : `hidden` } top-navbar border-gray-400 w-full lg:inline-flex lg:w-auto px-2 pt-2 pb-3`} id="menu">
      <nav >
        <ul className="bg-white lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0">
          <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">Home</a></li>
          <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">About</a></li>
          <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">Team</a></li>
          <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</div>
    )
}