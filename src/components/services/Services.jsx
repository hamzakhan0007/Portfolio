import React from 'react'
import './services.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Frontend Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Create in-house web applications.</p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Web page development.</p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Develope landing Page.</p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Responsive web application.</p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Bug fix, QA, and problem solve.</p>
            </li>
          </ul>
        </article>

          {/* BACKEND  */}
        <article className='service'>
          <div className="service__head">
            <h3>Backend Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Develope backend using Node.js and Express.js.</p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Database using MongoDB.</p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p>Database design and development for website career stage.</p>
            </li>
            {/* <li>
              <HiBadgeCheck className='service__list-icon' />
              <p></p>
            </li>
            <li>
              <HiBadgeCheck className='service__list-icon' />
              <p></p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  )
}


export default Services