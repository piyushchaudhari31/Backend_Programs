import React from 'react'
import '../css/foodmenu.css'
import Foodlist from './Foodlist'
import Displaymenu from './Displaymenu'
import Self from '../pages/Components/Self'
import Footer from '../pages/Components/footer'
import photot from '../photo/background.webp'
import { useNavigate } from 'react-router-dom'

const Foodmenu = () => {

  const nevigate = useNavigate()


  const navigateHandler =()=>{
    nevigate('/')
  }

  return (
    <div className='foodmenu_page'>
      <div className='foodmenu'>

        <div className="close">
          <button onClick={navigateHandler} className='close_btn'><i class="ri-close-line"></i></button>
        </div>

        <div className="header">
          <img src={photot} alt="" />
          <h1>Menu</h1>
        </div>
        <div className="middle">

          <Foodlist />
          <hr></hr>
          <Displaymenu />
        
        </div>
        
        <div className="footer">
          <Self />
         
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Foodmenu
