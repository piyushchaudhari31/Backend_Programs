import React, { useContext, useEffect, useState } from 'react'
import { ReactContext } from '../context/Context'
import Fooditem from './Fooditem'
import axios from 'axios'
import '../css/displaymenu.css'
const Displaymenu = () => {

    const {fetchfood , category , menuList,menu} = useContext(ReactContext)
    
    
    useEffect(()=>{
      fetchfood()
    },[menuList])
    
  return (
    <div>
      <div className="Displaymenu">
        {menuList.map((item,id)=>{          
            
              
            if(category === item.category){
                return <Fooditem key={id} id={item._id} image={item.image} name={item.name} price={item.price} category={item.category}/>
            }

        })}

      </div>
    </div>
  )
}

export default Displaymenu
