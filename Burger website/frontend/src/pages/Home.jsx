import React from 'react'
import Burger from '../pages/Components/Burger'
import About from '../pages/Components/About'
import Offer from '../pages/Components/Offer'
import Menu from '../pages/Components/Menu'
import Contact from '../pages/Components/Contact'
import Bur_images from '../pages/Components/Burger_img'
import Footer from '../pages/Components/footer'


const Home = () => {
  return (
    <div className='Home'>
      <Burger />
      <About />
      <Offer />
      
      <Menu />
      <Bur_images />
      <Contact />
      <Footer />

      
      
    </div>
  )
}

export default Home
