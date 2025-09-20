import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const About = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/user", { withCredentials: true });
        setData(response.data.user.username);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const logOutHandler = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/logout", { withCredentials: true });
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      
      <button className="absolute top-5 right-5 bg-red-600 text-white px-5 py-2 rounded-lg shadow-lg cursor-pointer"onClick={logOutHandler}>Log Out</button>

      
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-10 flex flex-col items-center gap-5 text-center">
        <h1 className="text-5xl font-bold text-red-600 uppercase drop-shadow-lg">{data},</h1>
        <h3 className="text-xl text-black/90">
          Welcome! To our <span className="font-semibold text-black-500">Gokuldham Society</span> 😅
        </h3>
      </div>
    </div>
  );
};

export default About;
