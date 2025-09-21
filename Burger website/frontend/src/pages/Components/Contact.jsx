import React from 'react'
import '../../css/contact.css'
import video from '../../photo/buregr_vid.mp4'
import Self from './Self'

const Contact = () => {
  return (
    <>
    <div className='contact' id='contact_page'>
    <div className="left_side">
      <video src={video} autoPlay loop muted></video>
    </div>
    <div className="right_Side">
      <h1>WHAT OUR CLIENTS HAVE TO SAY ?</h1>
      <p> Each one looks so good it makes your mouth water and all the tasty stuff on top.  Every bite is a mix of amazing flavors that shows how much you care about making great food. </p>

    </div>
    
    </div>
    <div className="about">
      <Self />
    </div>
    </>
  )
}

export default Contact
