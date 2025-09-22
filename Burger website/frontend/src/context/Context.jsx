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

  const cartvalue = {
    offer,
    cartitem,
    setcartitem,
    foodlist, menuDisplay,
    category,
    setcategory,
    menuList,
    setMenuList,
    fetchfood
  }
  return (
    <ReactContext.Provider value={cartvalue}>{props.children}</ReactContext.Provider>
  )
}

export default Context
