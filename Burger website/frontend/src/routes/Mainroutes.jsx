import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Foodmenu from '../pages/Foodmenu'
import Update from '../pages/Update'
import Cart from '../pages/Components/Cart'
import Menu from '../pages/Components/Menu'
import Buy from '../pages/Buy'
import Login from '../pages/Components/Login'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/foodmenu' element={<Foodmenu />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/success/buy' element={<Buy />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
    </Routes>
  )
}

export default Mainroutes
