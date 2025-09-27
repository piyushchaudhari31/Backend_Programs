import React, { useContext, useEffect, useState } from 'react'
import '../css/update.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { ReactContext } from '../context/Context'

const Update = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register,handleSubmit,reset} = useForm()
  const {menuList , setMenuList ,fetchfood} = useContext(ReactContext)

  
  



  const [food, setFood] = useState({})

  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/food/get/${params.id}`)
        setFood(response.data.food);
        reset({
          name: response.data.food.name,
        price: response.data.food.price,
        category: response.data.food.category
        })

      } catch (error) {
        console.log(error.message);
      }

    }
    getFood()


  },[params.id,reset])

  useEffect(()=>{
    fetchfood()
  },[])


  const submitHanlder = async(data)=>{
    try {
      const res = await axios.patch(`http://localhost:3000/api/food/update/${params.id}`,data)
      fetchfood()
      navigate('/foodmenu')
      
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const closeHanlder = (data)=>{
    navigate('/foodmenu')
  }

  

  return (
    <div className='update'>
      <h1>Update</h1>
      <div className="update_detail">
        <div className="left_pannel">
          <img src={food.image} alt="" />
          <h4>Name:- {food.name}</h4>
        </div>
        <div className="right_pannel">
          <form onSubmit={handleSubmit(submitHanlder)}>
            <input type="text" {...register("name")} />
            <input type="text" {...register("price")}/>
            <select {...register("category")}>
              <option value="Burger">Burger</option>
              <option value="Milkshake">Milkshake</option>
              <option value="Chunks">Chunks</option>
              <option value="Waffle">Waffle</option>
            </select>
            <div className="button">

            <button className='updatebtn'>Update</button>
            <button className='closebtn' onClick={closeHanlder}>Close</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Update
