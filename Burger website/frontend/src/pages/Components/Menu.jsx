import React from 'react'
import '../../css/menu.css'
import img_8 from '../../photo/img_8.png'
import img_9 from '../../photo/img_9.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='Menu' id='Menu_page'>
      <div className="menu_session_first">
        <img src={img_8} alt="" />
        <div className="menu_offer">
          <h3>25% OFF</h3>
          <div className="menu_title">
            <h4>Enjoy our specially prepared burgers for you</h4>
            <p>Dont miss out on our daily special offers</p>
            <h3>₹99</h3>
          </div>
        </div>
      </div>
      <div className="menu_session_second">
        <div className="menu_offer">
          <div className="menu_title">
            <h3>15% OFF</h3>
            <h4>New, amazing sandwich offers every day </h4>
            <p>Just add some of our juicy side dishes🤤</p>
            <h3>₹159</h3>
          </div>
          <img src={img_9} alt="" />
        </div>
      </div>

      <div className='All_menu'>
        <button><Link to='/foodmenu'> VIEW ALL MENU </Link></button>
      </div>


    </div>
  )
}

export default Menu
