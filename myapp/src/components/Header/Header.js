import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css";
export default function Header() {
  return (
    <>
      <header className='menubar'>
      <div className='container-fluid '>
      <ul>
        <li><NavLink to="/">MovieCards</NavLink></li>
        <li><NavLink to="/counter">Increament-Decreament</NavLink></li>
        <li><NavLink to="/timeClick">RefreshTime On Click</NavLink></li>
        <li><NavLink to="/digitalclock">Digital Clock</NavLink></li>
        <li><NavLink to="/operations">Operations</NavLink></li>
        <li><NavLink to="/formhandle">Form Handle</NavLink></li>
        <li><NavLink to="/todolist">Todo List</NavLink></li>
        <li><NavLink to="/covidtable">Covid Data</NavLink></li>
        {/* <li><NavLink to="/pokemondata">Pokemon Data</NavLink></li> */}
        {/* <li><NavLink to="/searchgallery">Search Gallery</NavLink></li> */}
        {/* <li><NavLink to="/user/girish">User</NavLink></li> */}
      </ul>
      </div>
      </header>
    </>
  )
}
