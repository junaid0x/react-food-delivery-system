import React, { useState } from 'react';
import './Login.css'
import { assets } from '../../assets/assets';

const Login = ({setShowlogin}) => {

    const [currstate,setcurrstate] = useState ('Login')

  return (
    <div className='Login'>
      <form  className="login-popup">
        <div className="lp-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="lp-input">
            {currstate==='Login'? <></> : <input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Enter Password' required />
        </div>
        <button>{currstate==='Sign Up'? 'Create account': 'Login'}</button>
        <div className="lp-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currstate==='Login'?<p>Don't have account?<span onClick={()=>setcurrstate('Sign Up')} >Click Here</span></p> 
        :<p>Already have an account?<span onClick={()=>setcurrstate('Login')} >Login Here</span></p>
        }
        
      </form>
    </div>
  );
}

export default Login;
