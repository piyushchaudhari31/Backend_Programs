import React, { createContext, useState } from 'react'
import { foodlist, menuDisplay, offer } from '../../src/photo/photo'


export const ReactContext = createContext(null)

const Context = (props) => {


   const [category , setcategory] = useState('ALL')
    const [cartitem , setcartitem] = useState({})

    const cartvalue = {
        offer,
        cartitem,
        setcartitem,
        foodlist,menuDisplay,
        category,
        setcategory
    }
  return (
    <ReactContext.Provider value={cartvalue}>{props.children}</ReactContext.Provider>
  )
}

export default Context
