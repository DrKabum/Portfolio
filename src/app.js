import React from 'react'

import Header from './containers/header'
import Home from './containers/home'
import About from './containers/about'

import './app.css'


export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
      </main>
    </>
  )
}
