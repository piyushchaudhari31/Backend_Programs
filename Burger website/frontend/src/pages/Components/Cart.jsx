import React, { useContext, useEffect } from 'react'
import { ReactContext } from '../../context/Context'
import '../../css/cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const {cartitem,menuList,fetchfood,remove_to_cart} = useContext(ReactContext)
    

    const navigateHandler = ()=>{
        navigate('/foodmenu')
    }
    
    
    
  return (
    <div className='cart'>
        <div className="cartitems">
            <h1>Cart Item</h1>
            <div className="close">
                <button onClick={navigateHandler} className='close_btn'><i className="ri-close-line"></i></button>
            </div>

        <div className="cart_title">
          <p>Itmes</p>
          <p>title</p>
          <p>Prize</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {menuList.map((item,idx)=>{
          if(cartitem[item._id]>0){
            
            
            return(
             <div key={idx}>
              <div className='Cart_item_title Cart_item_items'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartitem[item._id]}</p>
                <p>₹{item.price * cartitem[item._id]}</p>
                <p onClick={()=>remove_to_cart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
              
            )
          }
        })}
      </div>
      
    </div>
  )
}

export default Cart
