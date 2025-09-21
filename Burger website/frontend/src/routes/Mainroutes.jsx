import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Foodmenu from '../pages/Foodmenu'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/foodmenu' element={<Foodmenu />}></Route>
    </Routes>
  )
}

export default Mainroutes
