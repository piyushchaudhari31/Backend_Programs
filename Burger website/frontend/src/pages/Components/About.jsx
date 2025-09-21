import React, { useRef } from 'react'
import '../../css/about.css'
import burger from '../../photo/burger.mp4'


const About = () => {

  const video = useRef(null)

  const handleMOuseEnter = ()=>{
    video.current.play()
  }
  const handelMouseLeave =()=>{
    video.current.pause()

  }

  return (
    <div className='about' id='about_page'>
      <div className="about_page">
        <div className="about_img">
          <video src={burger} ref={video} muted onMouseEnter={handleMOuseEnter} onMouseLeave={handelMouseLeave}></video>

        </div>
        <div className="describe">
          <button>About us</button>
          <div className="name">
            <h1>Delivering best ingredients for our trusty food lovers</h1>
          </div>
          <div className="paragraph">
            <p>A deconstructed shrimp burger in mid-air.
              Black buns, grilled shrimp, fresh veggies, and creamy sauce.
              Set over a hot grill with smoky, dramatic flair.
              A bold and artistic gourmet presentation.</p>
          </div>
          <div className="short_line">
            <h5>This is a dramatic, deconstructed gourmet shrimp burger featuring a black sesame bun sliced vegetables</h5>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
