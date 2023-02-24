import React from 'react'
import '../intro/Intro.css'
import me from '../../images/me.png'
//import svg from '../../images/svg.svg'
const intro = () => {
  return (
    <div className='hero'>
       <div className="heroLeft">
           <div className="heroLeftWrapper">
            <h2 className='i-intro'>My Name is</h2>
            <h1 className='i-name'>Mustapha Tahiru</h1>
             <div className="i-title">
                <div className="i-tile-wrapper">
                    <div className="i-tile-item">Web Developer</div>
                    <div className="i-tile-item">UI/UX Designer</div>
                    <div className="i-tile-item">Photographer</div>
                    <div className="i-tile-item">Content Creator</div>
                    <div className="i-tile-item">Writer</div>
                   
                </div>
             </div>
             <p className="i-desc">
                I design and develop services for customers of all sizes,
                specializing <br /> in creating stylish , mordern website,
                 web servers and online <br /> stores.
             </p>
           </div>
           {/* <img src={svg} alt='svg' className='svg'/> */}
            
       </div>
       <div className="heroRight">
        <div className="i-bg"></div>
       <img src={me} alt="self" className='i-img' />
          
       </div>
    </div>
  )
}

export default intro
