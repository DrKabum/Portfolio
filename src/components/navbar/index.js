import React from 'react'
import './navbar.css'

export default function Navbar({children, ...props}) {
  return (
      <nav {...props}>
          <ul className='nav-link-container'>
              {children}
          </ul>
      </nav>
  )
}

Navbar.Link = function NavbarLink({children, ...props}) {
  return (
    <li className='nav-li'>
        <a className='nav-a' {...props}>{children}</a>
    </li>
  )
}
