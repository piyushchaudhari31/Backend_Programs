import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login",data,{ withCredentials: true });

      toast.success(response.data.message);
      reset();
      navigate("/about");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
     
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[90%] sm:w-[400px] flex flex-col items-center gap-6 border border-white/20">
        
        
        <h1 className="text-4xl text-white">Login ✨</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-5 w-full">
          
        <input type="text" {...register("username")} className="p-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
            placeholder="Enter Username" required />
        <input type="password" {...register("password")}
            className="p-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
            placeholder="Enter Password"required/>
          <button className="p-3 rounded-xl bg-blue-500 text-white cursor-pointer">Login</button>
        </form>

        <p className="text-white">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-400">Register</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
