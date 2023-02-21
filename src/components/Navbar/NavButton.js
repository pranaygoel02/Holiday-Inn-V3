import React,{useRef} from 'react'
import './navBtn.css'
import {useNav} from '../../context/NavContext'
function NavButton() {
      const menuIconRef = useRef()
      const {toggleNav,navOpen} = useNav()
  return (
    <label className='menu-icon' for="check">
        <input ref={menuIconRef} checked={navOpen}  onChange={toggleNav} type="checkbox" id="check"/> 
        <span className='bg-primary'></span>
        <span className='bg-primary'></span>
        <span className='bg-primary'></span>
    </label>
  )
}

export default NavButton