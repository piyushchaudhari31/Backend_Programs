import React from 'react'
import burger_img from '../../photo/Burger_img.png'
import '../../css/burger.css'
import Nav from '../../Navbar/Nav'
import video from '../../photo/buregr_vid.mp4'
import { useNavigate } from 'react-router-dom'

const Burger = () => {

  const navigate = useNavigate()

  const navigateHandler = ()=>{
    navigate('/foodmenu')
  }

  return (
    <div className='Burger'>
      <div className="vidio">
        <video src={video} autoPlay loop muted></video>
      </div>
      <div className="burger_page">
        <Nav />
        <div className="burger_photo">
          <div className="burger_name">
            <h2>Crispy  <span>Tender</span> </h2>
            <h1>BURGER</h1>
          </div>
          <div className="burger_img">
            <img src={burger_img} alt="" />
          </div>
          <div className='burger_btn'>
            <button className="btn" onClick={navigateHandler}>SEE MORE</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Burger
