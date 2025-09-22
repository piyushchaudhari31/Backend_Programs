import React, { useContext } from 'react'
import '../css/fooditem.css'
import axios from 'axios'
import { ReactContext } from '../context/Context'

const Fooditem = ({ id, name, price, image, category }) => {

  const {fetchfood} = useContext(ReactContext)


  const getCardHandler = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/food/delete/${id}`)
      fetchfood()      
    } catch (error) {
      console.log(error.message);
      
    }
    
  }

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
          <div className="button">
            <button className='read'>Read..</button>
            <button className='delete' onClick={()=>getCardHandler(id)}>Delete</button>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Fooditem

