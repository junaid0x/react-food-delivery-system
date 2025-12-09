import React, { useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setShowlogin}) => {

  const [menu, setmenu] = useState("Home")
  const {gettotalcartamount} = useContext(StoreContext)

  return (
    <div className='nav'>
      <Link to='/' ><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="nav_menu">
        <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"? "active": ""}>Home</Link>
        <a href='#exploremenu' onClick={()=>setmenu("Menu")} className={menu==="Menu"? "active": ""}>Menu</a>
        <a href='#app-download' onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"? "active": ""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setmenu("Contact Us")} className={menu==="Contact Us"? "active": ""}>Contact Us</a>
      </ul>
      <div className="nav_right">
        <img src={assets.search_icon} alt="" />
        <div className="nav_search_icon">
            <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
            <div className={gettotalcartamount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowlogin(true)} >Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
