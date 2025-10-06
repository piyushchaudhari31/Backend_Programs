import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../../css/login.css'
import video from '../../photo/buregr_vid.mp4'
import toast from 'react-hot-toast'
import { ReactContext } from '../../context/Context'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'


const Login = () => {
    const { register, handleSubmit,reset } = useForm()
    const [currentstate, setcurrentstate] = useState("login")
    const {token,setToken} = useContext(ReactContext)
    const navigate = useNavigate()
    
    
    const submitHandler = async(data)=>{
        try {
            if(currentstate === "login"){
                try {
                    const response = await axios.post("http://localhost:3000/auth/login",data,{withCredentials:true})
                    toast.success(response.data.message);  
                    setToken(response.data.token)
                    reset()
                    localStorage.setItem("token",response.data.token) 
                    
                    navigate('/')
                                        
                } catch (error) {
                    if(error.response){
                        toast.error(error.response.data.message)
                    }
                    else{
                        toast.error(error.response.data.message)
                    }    
                }
            }
            else{
                try {
                    const response = await axios.post("http://localhost:3000/auth/register",data,{withCredentials:true})
                    toast.success(response.data.message)
                    setcurrentstate("login")
                    reset()
                } catch (error) {
                    if(error.response){
                        toast.error(error.response.data.message)
                    }
                    else{
                        toast.error(error.message)
                    }   
                    
                }
                
            }
            
        } catch (error) {
            console.log(error.message);
            
        }
    }

    return (
        <div className="login_page">
            
            <div className="video_container">
                <video src={video} autoPlay loop muted />
            </div>

         
            <div className="login">
                <form className='login_container' onSubmit={handleSubmit(submitHandler)}>
                    <div className="login_title">
                        <h2>{currentstate}</h2>
                    </div>
                    <div className="login_input">
                        {currentstate !== "login" && 
                            <input type="text" placeholder='Your name' {...register("name")} required />
                        }
                        <input type="email" placeholder='Your email' {...register("email")} required />
                        <input type="Password" placeholder='Your password' {...register("password")} required />
                    </div>
                    <button type='submit'>
                        {currentstate === "sign up" ? "Create Account" : "Login"}
                    </button>
                    <div className="login_condition">
                        <input type="checkbox" required />
                        <p>I agree to terms and conditions.</p>
                    </div>
                    {currentstate === "login" ?
                        <p>New Account? <span onClick={() => setcurrentstate("sign up")}>Click here</span></p> :
                        <p>Already have an Account? <span onClick={() => setcurrentstate("login")}>Login here</span></p>
                    }
                </form>
            </div>
        </div>
    )
}

export default Login
