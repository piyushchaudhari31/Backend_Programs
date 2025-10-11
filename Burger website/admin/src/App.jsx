import React from 'react'
import Nav from './Component/navbar/Nav'
import Sidebar from './Component/sidebar/sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'


const App = () => {

  const url = "http://localhost:3000"

  return (
    <div>
      <Nav />
      <hr />
      <div className="app_content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>}></Route>
          <Route path='/list' element={<List url={url}/>}></Route>
          
        </Routes>
      </div>
    </div>
  )
}

export default App
