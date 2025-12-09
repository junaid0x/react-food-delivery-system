import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='fc' id='fc'>
                <div className="fc-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde libero 
                        voluptate ex qui mollitia totam recusandae consectetur ad eaque fugiat 
                        perspiciatis voluptatum maxime neque, quod praesentium, saepe eligendi 
                        repudiandae id.</p>
                    <div className="f-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="fc-centre">
                    <h2>Tomato</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="fc-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+92 xxx xxxxxx</li>
                        <li>contact@dummy.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="fcopyright">
                Copyright 2025 - All Rights Reserved
            </p>
        </div>
    );
}

export default Footer;
