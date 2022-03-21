import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Header from './containers/header'


import './app.css'
import { Hero } from './components'


export default function App() {
  return (
    <>
      <Header/>
      <main id='home'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={
            <Hero>
              <Hero.SubContainer>
              <p style={{color: 'white'}}>Error 404 : the page requested doesn't exist... And by the way, sorry but this page is a work in progress</p>    
              </Hero.SubContainer>
            </Hero>
          } />
        </Routes>
      </main>
    </>
  )
}
