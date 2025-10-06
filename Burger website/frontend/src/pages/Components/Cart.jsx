import React, { useContext, useEffect } from 'react'
import { ReactContext } from '../../context/Context'
import '../../css/cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const { cartitem, menuList, fetchfood, remove_to_cart, getTotalAmount ,token} = useContext(ReactContext)

  return (
    <div className='cart'>
      <h1>Cart Item</h1>
      <div className="cartitems">
        
        
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
        {menuList.map((item, idx) => {
          if (cartitem[item._id] > 0) {


            return (
              <div key={idx}>
                <div className='Cart_item_title Cart_item_items'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>₹{item.price * cartitem[item._id]}</p>
                  <p onClick={() => remove_to_cart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h1>Cart Total</h1>

          <div>
            <div className="cart_sub">
              <p>Subtotal</p>
              <p>₹ {getTotalAmount()}</p>
            </div>
            <hr />
            <div className="delivery_fee">
              <p>Delivery Fees(Gst)</p>
              <p>₹10</p>
            </div>
            <hr />
            <div className="total">
              <p>Total</p>
              <p className='total_prize'>₹ {getTotalAmount() + 10}</p>
            </div>
            <div className="Total_btn">
              {getTotalAmount()>0 && token ? 
                
              <button className='process_btn' onClick={()=>navigate("/success/buy")}>Process TO CheckOut</button>:<></>}
            
            <button className='close_button'onClick={()=>navigate('/foodmenu')}>Close</button>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
