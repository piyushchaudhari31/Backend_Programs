import React, { useContext } from 'react'
import '../css/fooditem.css'
import axios from 'axios'
import { ReactContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Fooditem = ({ id, name, price, image, category }) => {

  const navigate = useNavigate()
  const {fetchfood} = useContext(ReactContext)




  const getCardHandler = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/food/delete/${id}`)
      fetchfood()      
    } catch (error) {
      console.log(error.message);
      
    }
    
  }

  const getCardUpdate = async(id)=>{
    console.log(id);
    navigate(`/update/${id}`)
    
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
            <button className='read' onClick={()=>getCardUpdate(id)}>update</button>
            <button className='delete' onClick={()=>getCardHandler(id)}>Delete</button>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Fooditem

