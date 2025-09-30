import React, { useContext } from 'react'
import '../css/fooditem.css'
import axios from 'axios'
import { ReactContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Fooditem = ({ id, name, price, image, category }) => {

  const navigate = useNavigate()
  const {cartitem,add_to_cart,remove_to_cart} = useContext(ReactContext)
  

  return (
    <div>
      
        <div className="food_item_card" >
          <div className="food_img_card">
            <img src={image} alt="" />
          </div>

          <div className="food_img_name">
            <h1>{name}</h1>
          </div>
          <div className="food_img_price">
            <h5>₹{price}</h5>
          </div>
          {!cartitem[id]? <><div className="add_Cart addition" onClick={()=>add_to_cart(id)}><i className="ri-add-line"></i></div></>:
          <div className="add_Cart">
            
            <div className="remove" onClick={()=>remove_to_cart(id)}><i className="ri-subtract-fill"></i></div>
            <h1 className='add_cart_name'>{cartitem[id]}</h1>
            <div className="addition" onClick={()=>add_to_cart(id)}><i className="ri-add-line"></i></div>
            
          </div>
          }
        </div>
      </div>
    
  )
}

export default Fooditem

