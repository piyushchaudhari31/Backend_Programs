import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactContext } from '../context/Context';
// import '../Navbar/Nav.css'


const Menu_nav = () => {
    const [isActive, setIsactive] = useState('Home');
    const {getTotalAmount,token,setToken} = useContext(ReactContext)
    const navigate = useNavigate()
    const [nav,setNav] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50?setNav(true):setNav(false)
        })
    },[])

    const logOutHandler =()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate('/foodmenu')
    

    }
  return (
    <div className={`nav ${nav ? 'fixed-nav ':''}`}>
        <ul>
        <li>
          <Link  to='/' onClick={() => setIsactive('Home')}>Home</Link>
        </li>
        <div className="navbar_icon">
        <li><Link to='/cart'><i className="ri-shopping-cart-line"></i></Link></li>
        <div className={`${getTotalAmount()== 0 ? "":"dot"}`}></div>

        </div>
       
      </ul>
      {!token ? <button><Link to='/login'>Login</Link></button>:<button onClick={logOutHandler}>Log Out</button>}
      
      
    </div>
  )
}

export default Menu_nav
