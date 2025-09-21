import React from 'react'
import '../../css/burger_img.css'
import img_1 from '../../photo/marquee_1.jpg'
import img_2 from '../../photo/marquee_2.jpg'
import img_3 from '../../photo/marquee_3.jpg'
import img_4 from '../../photo/marquee_4.jpg'


const Bur_images = () => {
  return (
    <div className='bur_images'>
      <div className="marquee">
        <div className="img">
          <img src={img_1} alt="" />
        <img src={img_2} alt="" />
        <img src={img_3} alt="" />
        <img src={img_4} alt="" />

        </div>
        <div className="img">
           <img src={img_1} alt="" />
        <img src={img_2} alt="" />
        <img src={img_3} alt="" />
        <img src={img_4} alt="" />

        </div>
        
       
      </div>
      
      
      
    </div>
  )
}

export default Bur_images
