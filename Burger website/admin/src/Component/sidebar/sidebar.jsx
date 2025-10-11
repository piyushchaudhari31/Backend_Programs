import React from 'react'
import './sidebar.css'
import { photos } from '../../photo/Photo'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar_opt">
            <NavLink to='/add' className="sidebar_option">
                <img src={photos.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar_option">
                <img src={photos.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
