import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'> 
    <a href="https://www.linkedin.com/in/mohdhamza0007/" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/hamzakhan0007" target='_blank'><FaGithub/></a>
    <a href="https://www.instagram.com/hamza_khan_0007/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default headerSocials