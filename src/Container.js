import React from 'react'
import Navbar from './component/Navbar'
import HeroText from './component/HeroText'
import BoxGrid from './component/BoxGrid'
import Footer from './component/Footer'

const Container = () => {
  return (
    <div className="bg-customWhite">
        <Navbar />
        <HeroText />
        <BoxGrid />
        <Footer />
    </div>
  )
}

export default Container