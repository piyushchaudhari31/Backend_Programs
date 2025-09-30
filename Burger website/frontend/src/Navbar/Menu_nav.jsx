import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import '../Navbar/Nav.css'


const Menu_nav = () => {
    const [isActive, setIsactive] = useState('Home');

    const [nav,setNav] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50?setNav(true):setNav(false)
        })
    },[])

  return (
    <div className={`nav ${nav ? 'fixed-nav ':''}`}>
        <ul>
        <li>
          <Link  to='/' onClick={() => setIsactive('Home')}>Home</Link>
        </li>
        <li><Link to='/cart'><i className="ri-shopping-cart-line"></i></Link></li>
       
      </ul>
      
    </div>
  )
}

export default Menu_nav
