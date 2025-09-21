import React, { useContext } from 'react'
import '../../css/offer.css'
import { ReactContext } from '../../context/Context'
import img_3 from '../../photo/img_3.jpg'

const Offer = () => {
  const {offer} = useContext(ReactContext)

  const offerMenu = offer.map((e,idx)=>{
    
    return (
    
    <div className='offer_page' key={idx}>
      <div className="image">
        <img src={e.image} alt="" />
      </div>
      <div className="name">
        <h4>{e.name}</h4>
      </div>
      <div className="price">
        <h5>₹{e.price}</h5>
      </div>
      <button>Read..</button>

    </div>
  
  )
  })

  return (
    <div className='offer' id='offer_page'>
      <h1>Special Offers</h1>
      <div className="pannel">
        <div className="left_pannel">
        <img src={img_3} alt="" />
        <h2>Ham Sandwich</h2>
        <div className="offer_btn">
          <button className='btn_1'>fat 26g</button>
          <button className='btn_1'>sugar 34g</button>
          <button className='btn_1'>carbs 26g</button>
        </div>
        <p>A sandwich is a meal made by placing fillings like meat, cheese, or vegetables between slices of bread. It can be served hot or cold, toasted or plain. Common condiments include mayo, mustard, or sauces.  </p>
        <div className="cart_pannel">
          <p>₹59</p>
          <button>LEARN MORE</button>
        </div>
        </div>
        
        <div className="right_pannel">
          {offerMenu}
        </div>
      </div>
      
    </div>
  )
}

export default Offer
