
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
    <button onClick={() => toggleExpansion(!isExpanded)} class="transition duration-700 ease-in-out hover:bg-gray-300 rounded flex items-center px-3 py-2 text-gray-700">
    <svg class="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path className= {`${ isExpanded ? `hidden` : `block` }`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      <path className= {`${ isExpanded ? `block` : `hidden` }`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div className= {`${ isExpanded ? `block` : `hidden` } px-4 pt-2 pb-4 top-navbar border-gray-900 w-full lg:inline-flex lg:w-auto px-2 pt-2 pb-3`} id="menu">
          <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">Home</a>
          <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">About</a>
          <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">Team</a>
          <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px" href="#">Contact</a>
    </div>
  </header>
</div>
    )
}