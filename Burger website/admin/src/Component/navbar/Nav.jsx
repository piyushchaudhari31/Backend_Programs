import React from 'react'
import './Nav.css'
import {photos} from '../../photo/Photo'

const Nav = () => {
  return (
    <div className='navbar'>
      <h2>Burger</h2>
      <img className='profile' src={photos.profile_page} alt="" />
    </div>
  )
}

export default Nav
