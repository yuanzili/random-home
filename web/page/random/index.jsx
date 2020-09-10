import React from 'react'

// core components
import DemoNavbar from '../components/Navbars/DemoNavbar.jsx'
import CardsFooter from '../components/Footers/CardsFooter.jsx'
import Introduce from './components/Introduce'
import Wallpaper from './components/wallpaper'
function Random() {
  return (
    <>
      <DemoNavbar />
      <main>
        <Introduce />
        <Wallpaper />
      </main>
      <CardsFooter />
    </>
  )
}

export default Random
