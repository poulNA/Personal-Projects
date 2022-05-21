import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

const Foot = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Paul Jeong</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Paul Jeong. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Foot