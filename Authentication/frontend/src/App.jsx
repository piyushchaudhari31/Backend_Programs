import React from 'react'
import Login from './login'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import About from './about'

const App = () => {
  return (
    <div className='h-screen w-screen bg-zinc-900 text-black'>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      


    </div>
  )
}

export default App
