import React from 'react'
import CV from '../../assets/cv.pdf'
import {FiFileText} from 'react-icons/fi'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume<FiFileText className='resume__logo'/></a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA