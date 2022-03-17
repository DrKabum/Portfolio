import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import useWindowDimensions from './hooks/useWindowDimensions'
import './app.css'
import logo from '/public/img/logo.png'


export default function App() {
  const NAV_TOGGLE_WIDTH = 450
  const {height, width} = useWindowDimensions()
  const [navToggled, setNavToggled] = useState(width > NAV_TOGGLE_WIDTH)

  useEffect(() => {
    if(width > NAV_TOGGLE_WIDTH) setNavToggled(true)
  }, [width])

  function toggleNav() {
    if(width > NAV_TOGGLE_WIDTH) return
    setNavToggled(prevToggleState => !prevToggleState)
  }

  return (
    <>
      <header>
        <img onClick={toggleNav} className={`logo-img ${navToggled && width <= NAV_TOGGLE_WIDTH ? 'logo-reversed' : ''}`} src={logo} alt='Nicolas Broca logo' /> 
        <Navbar toggled={navToggled}/>
      </header>
      <article>
      width: {width} ~ height: {height}
      </article>
    </>
  )
}
