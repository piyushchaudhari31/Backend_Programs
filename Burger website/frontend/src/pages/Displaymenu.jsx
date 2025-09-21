import React, { useContext } from 'react'
import { ReactContext } from '../context/Context'
import Fooditem from './Fooditem'
import '../css/displaymenu.css'
const Displaymenu = () => {

    const {menuDisplay , category} = useContext(ReactContext)
    
    
    
    
  return (
    <div>
      <div className="Displaymenu">
        {menuDisplay.map((item,id)=>{          
            
              
            if(category == "All" || category === item.category){
                return <Fooditem key={id} id={item._id} image={item.food_image} name={item.food_name} price={item.price} category={item.category}/>
            }

        })}

      </div>
    </div>
  )
}

export default Displaymenu
