import React from 'react'

import Navbar from '../components/Navbar'
import CarouselPeliculas from "../components/CarouselPeliculas"

const Layout = ({children}) => {
  return (
    <div className="bg-background">
      <Navbar />
      <section className="web-inner px-6 py-7">
        <CarouselPeliculas />
        {children}
      </section>
    </div>
  )
}

export default Layout