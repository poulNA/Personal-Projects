import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><GrGithub/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>

    </div>
  )
}

export default HeaderSocials