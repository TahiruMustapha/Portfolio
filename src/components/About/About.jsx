import React from 'react'
import '../About/About.css'
import img2 from '../../images/img2.jpeg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
           <div className="about-card bg"></div> 
           <div className="about-card">
            <img src={img2} alt="pic"
            className='a-img'
            />
            </div> 
            
        </div>
        <div className="about-right">
             <div className="about-title">About Me</div>
              <p className="about-sub">
                It is a long establish fact that a reader will be
                 distracted by the readerble <br /> content.
              </p>
              <p className="about-desc">
              Mustapha's dedication to his craft is evident in his portfolio, 
              which showcases his proficiency in building responsive and intuitive 
              user interfaces. His ability to work collaboratively with team members 
              and stakeholders, and his commitment to delivering projects on time and 
              within budget, make him a reliable and valued team player.
              </p>
        </div>
    </div>
  )
}

export default About
