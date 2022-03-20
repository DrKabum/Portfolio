import React, {useState, useEffect} from 'react'
import { Navbar } from '../components'
import { NAV_TOGGLE_WIDTH } from '../constants/style-constants'
import useWindowDimensions from '../hooks/useWindowDimensions'
import logo from '../../public/img/logo.png'
import './header.css'

export default function Header() {
    const {width} = useWindowDimensions()
    const [navToggled, setNavToggled] = useState(width > NAV_TOGGLE_WIDTH)

    useEffect(() => {
        if(width > NAV_TOGGLE_WIDTH) setNavToggled(true)
    }, [width])

    function toggleNav() {
        if(width > NAV_TOGGLE_WIDTH) return
        setNavToggled(prevToggleState => !prevToggleState)
    }

    return (
        <header>
            <img onClick={toggleNav} className={`logo-img ${navToggled && width <= NAV_TOGGLE_WIDTH ? 'logo-reversed' : ''}`} src={logo} alt='Nicolas Broca logo' /> 
            <Navbar className={`navbar ${navToggled ? 'nav-toggled' : ''}`}>
                <Navbar.Link href='#home'>Home</Navbar.Link>
                <Navbar.Link href='#about'>About</Navbar.Link>
                <Navbar.Link href='#projects'>Projects</Navbar.Link>
                <Navbar.Link href='#contacts'>Contacts</Navbar.Link>
            </Navbar>
        </header>
    )
}