import React from 'react'
import '../../css/self.css'

const Self = () => {
  return (
    <div className='self'>
      <div className="about_name">
        <h1>Chaudhari Piyush</h1>
        <p> I specialize in building complete full-stack applications by handling both the front end and the back end.</p>
        <div className="icon">
            <a href='https://www.instagram.com/mr_piyush.31' target=' '><i class="ri-instagram-fill"></i></a>
            <a href='https://github.com/piyushchaudhari31' target=' '><i class="ri-github-fill"></i></a>
            <i class="ri-linkedin-box-fill"></i>
        </div>

      </div>
      <div className="contact_us">
        <h1>Contact Us</h1>
        <div className="info">
            <a href='tel:+917201980622'><p><i class="ri-phone-line">  +91 72019 80622</i></p></a>
            <a href='mailto:mrpiyushchaudhari2006@gmail.com' target=' '><p> <i class="ri-mail-line">mrpiyushchaudhari2006@gmail.com</i></p></a>
            <a href='https://github.com/piyushchaudhari31' target=' '><p> <i class="ri-github-fill">piyushchaudhari31</i></p></a>
        </div>

      </div>
      <div className="subscribe">
        <h1>Subscribe</h1>
        <div className="input">
            <input type="text" placeholder='Enter your email here'/>
            <button>Subscribe</button>
        </div>

      </div>
    </div>
  )
}

export default Self
