import React, {useState} from 'react'
import NavLink from './NavLink/NavLink'
import './navbar.css'

export default function Navbar({toggled}) {
  return (
      <>   
        <nav className={`navbar ${toggled ? 'nav-toggled' : ''}`}>
            <ul className='nav-link-container'>
                <NavLink href='#home'>Home</NavLink>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#contacts'>Contacts</NavLink>
            </ul>
        </nav>
      </>
  )
}
