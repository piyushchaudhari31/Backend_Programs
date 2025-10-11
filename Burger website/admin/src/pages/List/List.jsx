import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {
  

  const [list, setList] = useState([]);

  const fetchList = async()=>{
    try {
      const response = await axios.get("http://localhost:3000/api/food/get")
      setList(response.data.food)
    } catch (error) {
      console.log(error.message);
    }
  }

  const removeFood = async(foodId)=>{
    console.log(foodId);
    try {
      const response = await axios.delete(`http://localhost:3000/api/food/delete/${foodId}`)
      fetchList()
      
    } catch (error) {
      toast.error(error.message);
      
    }
    
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list_table">
        <div className="list_table_format title">
          <b>Image</b>
          <b>Name</b>
          <b>Caterory</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='list_table_format'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
