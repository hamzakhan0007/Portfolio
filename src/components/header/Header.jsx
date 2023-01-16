import React from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohd Hamza</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME1} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header