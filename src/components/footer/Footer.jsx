import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Hamza</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohdhamza0007/" target='_blank'><BsLinkedin/></a>
        <a href="https://twitter.com/hamzakhan000786" target='_blank'><BsTwitter/></a>
        <a href="https://www.instagram.com/hamza_khan_0007/" target='_blank'><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 0007Developer.All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer