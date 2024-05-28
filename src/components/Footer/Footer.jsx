import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>rhcnuuhybcruuikhnumwkinuhf37xftui3kzfmgjstuy46x7 ujhnexxbfyutxjhbnr7i3fuxc4gxrgjm 3n jrffbhrjnjrfhjjjrbhcrhjuerjhfljincjsdbhryu fmurhfwiruhufbbksd,hjmacnghfbr</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy </li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>077-756-8957</li>
                <li>onlinefood@gmail.com</li>
            </ul>
        </div>
        </div>
        <hr/>
        <p className="footer-copyright"> copyright 2024 © Tomato.com - All Right Reserved.</p>
        
    </div>
  )
}

export default Footer