import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='comp-title'> What is Inceptra </div>
        <div className='about-body'>
          <div className='about-left'>
            <img src={require('../Assets/InceptraLogo.png')} alt="" height="100%" width="100%" />
          </div>
          <div className='about-right'>
            <h3 className='about-right-head'>Inceptra is Passion</h3>
            <p className='about-right-text'>
              Inceptra is an annual event for the alumni of Netaji Subhash Engineering College's IT department. The event aims to reunite former students with their alma mater and each other, to exchange experiences and insights on the IT industry's latest trends, career opportunities, and challenges. The event features talks and panel discussions by prominent alumni, faculty members, and current students, and also includes cultural and recreational activities for networking and socializing.
              <br />
              <br />
              Inceptra is an eagerly awaited event for the alumni, providing an opportunity to reconnect with old friends and mentors, learn about the latest IT industry developments, and be inspired by their peers' achievements. The event also serves as a platform for the college to demonstrate its strengths in IT education and maintain close ties with the alumni community, which plays a vital role in supporting the institution's growth and development.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
