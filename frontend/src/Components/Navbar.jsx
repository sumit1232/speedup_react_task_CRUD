import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
  <a><NavLink className="nav-link text-black" to='/'>Home</NavLink></a>
  <a><NavLink className="nav-link text-black" to='/userdata'>userdata</NavLink></a>
  </ul>
</nav>
        </>
    )
}

export default Navbar
