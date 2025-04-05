import React from 'react'
import "./Footer.css"
import insta_icon from "../../assets/instagram_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import youtube_icon from "../../assets/youtube_icon.png"
import fb_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'> 
    <div className='footer-icons'>
      <a href='https://www.instagram.com/ketan_027/?hl=en'><img src={insta_icon} alt="insta_icon"/></a>
      <img src={twitter_icon} alt="x_icon"/>
      <img src={youtube_icon} alt="yt_icon"/>
      <img src={fb_icon} alt="fb_icon"/>
    </div>
    <ul>
      <li>Audio Descriptoon</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Invester Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className='copyright-text'> &copy; 2002-2102 CloneFlix, Inc</p>
      </div>
  )
}

export default Footer