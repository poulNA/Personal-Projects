import React from 'react'
import './about.css'
import ME from '../../assets/profile.png'
import {FaAward} from 'react-icons/fa'
import {BsFolderPlus} from 'react-icons/bs'

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
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Undergraduate Upcoming 3rd Year</small>
            </article>


            <article className='about__card'>
              <BsFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>

          <p>
            Hi! My name is Paul Jeong. I am an undergraduate studying
            Computer Engineering at the 
            <br/> University of Illinois at Urbana-Champaign. 
            <br /> <br />
            I'm academically invested in Low Level Programming, however, I'm also super interested in Frontend 
            <br/> and the creative field with UX/UI.
            <br /><br />
            I enjoy assembling computers and keeping up to date with the latest tech.
            <br /><br />
            I love playing sports, such as volleyball, badminton, etc. 
            <br/>And recently, I picked up skateboarding and combat sports.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About