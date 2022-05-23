import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This Portfolio Website',
    github: 'https://github.com/poulNA/Personal-Projects/tree/main/portfolio/portfoliowebsite',
    demo: 'https://pauljeong.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Simple Smart Contract',
    github: 'https://github.com/poulNA/Personal-Projects/tree/main/ETH-hello-wrld',
    demo: 'https://ropsten.etherscan.io/address/0x7f3C9bb9253c7e65C222bF302E705e03149023b9#code'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Course Directory App',
    github: 'https://github.com/poulNA/CourseProjects/tree/main/Course%20Directory%20App',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: ' San Francisco Road Map',
    github: 'https://github.com/poulNA/CourseProjects/tree/main/San%20Francisco%20Road%20Map',
    demo: 'https://github.com/poulNA/CourseProjects/blob/main/San%20Francisco%20Road%20Map/README.md'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio