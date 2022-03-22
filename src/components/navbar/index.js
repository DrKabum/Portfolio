/* eslint-disable react/prop-types */
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './navbar.css'

export default function Navbar({ children, ...props }) {
  return (
    <nav {...props}>
      <ul className='nav-link-container'>{children}</ul>
    </nav>
  )
}

Navbar.Link = function NavbarLink({ children, to, ...props }) {
  return (
    <li className='nav-li'>
      <Link to={to} className='nav-a' {...props}>
        {children}
      </Link>
    </li>
  )
}
