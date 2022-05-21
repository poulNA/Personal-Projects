import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pauljeong3/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/poulNA" target="_blank" rel="noreferrer"><GrGithub/></a>
        <a href="https://www.instagram.com/pauljeong/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials