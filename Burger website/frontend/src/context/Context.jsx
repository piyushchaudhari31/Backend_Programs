import React, { createContext, useState } from 'react'
import { foodlist, menuDisplay, offer } from '../../src/photo/photo'
import axios from 'axios'


export const ReactContext = createContext(null)

const Context = (props) => {


  const [category, setcategory] = useState('ALL')
  const [cartitem, setcartitem] = useState({})
  const[menuList,setMenuList] = useState([])

  
  const fetchfood = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/food/get")
      setMenuList(response.data.food);

    } catch (error) {
      console.log(error.message);

    }
  }

  const add_to_cart = (item)=>{
    if(!cartitem[item]){
      setcartitem((prev)=>({...prev , [item]:1}))      
    }
    else{
      setcartitem((prev)=>({...prev,[item]:prev[item]+1}))
      
      
    }
    

  }
  const remove_to_cart = (item)=>{
    setcartitem((prev)=>({...prev , [item]:prev[item]-1}))
    

  }

  const getTotalAmount = ()=>{
    let totalAmount = 0
    for(let item in cartitem){
      if(cartitem[item]>0){
        let itemInfo = menuList.find((product)=> product._id === item)
        if(itemInfo){
          totalAmount += itemInfo.price * cartitem[item]
        }
      }
      
    }

    return totalAmount
  }

  const cartvalue = {
    offer,
    cartitem,
    setcartitem,
    foodlist, menuDisplay,
    category,
    setcategory,
    add_to_cart,
    remove_to_cart,
    menuList,
    setMenuList,
    fetchfood,
    getTotalAmount
  }
  return (
    <ReactContext.Provider value={cartvalue}>{props.children}</ReactContext.Provider>
  )
}

export default Context
