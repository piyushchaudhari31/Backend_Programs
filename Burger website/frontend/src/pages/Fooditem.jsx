import React from 'react'
import '../css/fooditem.css'

const Fooditem = ({ id, name, price, image, category }) => {



  return (
    <div>
      {/* <div className="food_item"> */}
        <div className="food_item_card">
          <div className="food_img_card">
            <img src={image} alt="" />
          </div>

          <div className="food_img_name">
            <h1>{name}</h1>
          </div>
          <div className="food_img_price">
            <h5>₹{price}</h5>
          </div>
          <div className="button">
            <button className='read'>Read..</button>
            <button className='delete'>Delete</button>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Fooditem

