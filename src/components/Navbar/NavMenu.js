import React, { useEffect } from 'react'
import {useNav} from '../../context/NavContext'
import './navMenu.css'
import { NavLink,useLocation } from 'react-router-dom'

import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

function NavMenu() {
    const {navOpen, toggleNav, toggleSearchBar} = useNav()
    const {pathname} = useLocation()

    useEffect(() => {
        if(navOpen) toggleNav()
    }, [pathname])

  return (
<>
    <div className={`w-full flex flex-col md:flex-row items-center justify-center font-barlow uppercase md:justify-end gap-8 overflow-auto ${!navOpen ? 'box-height-0' :'box-height-full'}`}>
    {/* <div className=''>
        <NavLink className={'hover:text-primary transition-all py-4 flex link items-center'} onClick={()=>toggleNav()} to={'/'}>Home <KeyboardArrowDownSharpIcon/></NavLink>
        <ul className='bg-white link-menu md:absolute text-black w-max flex flex-col px-2 p-2 capitalize'>
          <li className='hover:translate-x-1 cursor-pointer hover:text-primary transition-all border-b-1'>ffd</li>
          <li className='hover:translate-x-1 cursor-pointer hover:text-primary transition-all border-b-1'>ffd</li>
          <li className='hover:translate-x-1 cursor-pointer hover:text-primary transition-all border-b-1'>ffd</li>
          <li className='hover:translate-x-1 cursor-pointer hover:text-primary transition-all border-b-1'>ffd</li>
        </ul>
    </div> */}
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/'}>Home</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/about'}>About</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/rooms'}>Rooms & Suites</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/amenities'}>Amenities</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/meeting'}>Meetings</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/things-to-do'}>Things To Do</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/packages'}>Packages</NavLink>
        <NavLink className={'hover:text-primary transition-all md:py-4 flex items-center'} onClick={()=>toggleNav()} to={'/contact'}>Contact</NavLink>
    </div>
</>
  )
}

export default NavMenu