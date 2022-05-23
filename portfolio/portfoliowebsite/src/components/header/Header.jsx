import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatar.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Paul Jeong</h1>
        <h5 className="text-light">Student</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header