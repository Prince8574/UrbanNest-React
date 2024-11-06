import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus amet fugiat laboriosam eaque id error velit, </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>


            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home </li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>


            </div>
            <div className='footer-content-right'>
                <h2>Get in Touch</h2>
                <ul>
                    <li>123456789</li>
                    <li>abc@gmail.com</li>
                </ul>

            </div>
        </div>

      <hr />
      <p className="footer-copyright"> 

"Copyright 2024 © Tomato.com - All Right Reserved."</p>
    </div>
  )
}

export default Footer