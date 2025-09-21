import React, { useContext, useState } from 'react'
import { foodlist } from '../photo/photo'
import '../css/foodlist.css'
import { ReactContext } from '../context/Context'


const Foodlist = () => {

    const {category,setcategory} = useContext(ReactContext)
    

  return (
    <div>
      <div className="list">
        <div className="explore_menu">
            {foodlist.map((item,id)=>{
                return (<div onClick={()=>setcategory(prev => prev === item.food_name ? "All" : item.food_name)} key={id} className='menu_type'>
                                        
                    <img className={category === item.food_name? "active":" "} src={item.food_image} alt="" />
                    <h1>{item.food_name}</h1>
                </div>)
            })}
        </div>
      </div>
    </div>
  )
}

export default Foodlist
