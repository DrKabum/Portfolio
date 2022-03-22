import React from 'react'
import Home from '../containers/home-hero'
import About from '../containers/about-hero'
import Projects from '../containers/projects-hero'
import Contacts from '../containers/contact-hero'

export default function home() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contacts />
    </>
  )
}
