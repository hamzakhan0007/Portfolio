import React from 'react'
import './about.css'
import ME from '../../assets/about3.png'
import {FaAward} from 'react-icons/fa'
import {BiSupport} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>

            <article className='about__card'>
              <BiSupport className='about__icon' />
              <h5>Support</h5>
              <small>online 24/7</small>
            </article>

          </div>

          <p>
            Web developer, I create websites based on MERN technology, I am passionate about creating and developing web interfaces.With year of experience in web design and development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About