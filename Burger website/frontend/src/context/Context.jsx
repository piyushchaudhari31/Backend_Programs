import React, { createContext, useEffect, useState } from 'react'
import { foodlist, menuDisplay, offer } from '../../src/photo/photo'
import axios from 'axios'


export const ReactContext = createContext(null)

const Context = (props) => {


  const [category, setcategory] = useState('ALL')
  const [token, setToken] = useState("")
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
    if(!token){
      alert("Login First")
      return;
    }
    if(!cartitem[item]){
      setcartitem((prev)=>({...prev , [item]:1}))      
    }
    else{
      setcartitem((prev)=>({...prev,[item]:prev[item]+1}))
    }
    if(!token){
      alert("Login First")

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

  useEffect(()=>{
    async function loadData() {
      const saveToken = localStorage.getItem("token")
      if(saveToken){
        setToken(saveToken)
      }
    }
    loadData()
  })

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
    getTotalAmount,
    token,
    setToken
  }
  return (
    <ReactContext.Provider value={cartvalue}>{props.children}</ReactContext.Provider>
  )
}

export default Context
