import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../../Context';
import '../Toggle/Toggle.css'
const Toggle = () => {
    const theme = useContext(ThemeContext);
   const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"});
   }
  return (
    <div className='toggle'>
       <FaSun className='t-icon'/>
       <FaMoon className='t-icon'/>
       <div className="t-button" onClick={handleClick} 
       style={{left:theme.state.darkMode ? 0 : 25}}
       ></div>
    </div>
  )
}

export default Toggle
