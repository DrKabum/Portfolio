import React from 'react'
import './navlink.css'

export default function NavLink({children, href}) {
  return (
    <li className='nav-li'>
        <a className='nav-a' href={href}>{children}</a>
    </li>
  )
}
