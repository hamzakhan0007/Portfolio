import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/news4.png'
import IMG2 from '../../assets/inotebook.png'
import IMG3 from '../../assets/simon.png'
import IMG4 from '../../assets/dice2.png'
import IMG5 from '../../assets/drum.webp'
// import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Latest-News</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/hamzakhan0007/LatestNewsApp-React" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>iNotebook</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/hamzakhan0007/iNotebook" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Simon-Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/hamzakhan0007/Simon-Game" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Dice-Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/hamzakhan0007/Dice-Game" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Drum-Kit</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/hamzakhan0007/Drum-kit" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio