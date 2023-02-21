import React from 'react'
import LandingContent from './components/LandingContent'
import {useLanding} from './LandingLogic'
import './Landing.css'
import LandingCarousel from './components/LandingCarousel'
import BasicInfo from './components/BasicInfo'
import Rooms from './components/Rooms/Rooms'
import ExtraServices from './components/Services/ExtraServices'
import Facilities from './components/Facility/Facilities'
import { useNav } from '../../context/NavContext'

import Bg from '../../assets/images/2.jpg'
import VideoBar from './components/VideoBar'
import Blog from './components/Blogs/Blog'

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Testimonials from './components/Testimonial/Testimonials'
import InfoCards from './components/InfoCards'
import SearchRooms from './components/SearchRooms'
import Booking from './components/Booking'
import Footer from '../../components/Footer/Footer'

function Landing() {
    
    const {landingData,currIdx,setCurrIdx} = useLanding()
    const {scrolled} = useNav()
    
    
    return (
    <>
    <img className='fixed z-0 h-full w-full object-cover' src={Bg}/>
    <div className='landing-page relative z-10'>
        <LandingCarousel/>
        <BasicInfo/>
        <Rooms/>
        <ExtraServices/>
        <VideoBar/>
        <Facilities/>
        <SearchRooms/>
        <Testimonials/>
        <InfoCards/>
        <Blog/>
        <Booking/>
        <Footer/>
        {scrolled && <button onClick={() => window.scrollTo(0,0)} className='fixed bottom-4 md:bottom-16 right-4 md:right-16 text-primary outline outline-1 outline-primary rounded-full p-2'>
          <KeyboardArrowUpRoundedIcon/>
        </button>}
    </div>
    </>
  )
}

export default Landing