import React from 'react'
import LandingContent from './LandingContent'
import { useLanding } from '../LandingLogic'


import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Phone from '../../../components/Phone/Phone';


function LandingCarousel() {
    const {landingData, currIdx, setCurrIdx} = useLanding()

  return (
    <section id='landing' className={`relative flex flex-col h-screen overflow-hidden transition-all`}>
        
        <LandingContent data={landingData[currIdx]}/>
        
        {/*Landing Image & Overlay*/}
        <div className='absolute w-full h-full flex flex-col item-center justify-center'>
            <div className='w-full h-full z-[1] absolute bg-black/70'></div>
            <img className='w-full h-full object-cover' src={landingData[currIdx].bg}/>
        </div>
        
        <div className='hidden md:block'>
            <Phone text={'Reservation'} outline='outline outline-1' flex='flex-col' position='absolute' mode='vertical-rl' rotate='rotate-180' font='font-gilda' header='text-white uppercase tracking-[0.2rem]'/>
        </div>

        {/*Landing Carousel*/}
        <div className='absolute top-[35%] right-[6rem] hidden md:flex flex-col items-center gap-4 opacity-80'>
            <hr className='w-0 h-10 border'></hr>
            <ul className='z-10 text-white font-barlow gap-2 flex flex-col'>
                {[...Array(landingData.length).keys()].map(val => <button className={`${currIdx === val && 'text-primary'}`} onClick={()=>setCurrIdx(prev => Math.abs((val) % (landingData.length - 1)))}>{val + 1}</button>)}
            </ul>
            <hr className='w-0 h-10 border'></hr>
        </div>
        <div className='absolute flex flex-row items-center justify-between bottom-0 right-[50%] translate-x-[50%] md:right-[10rem] p-16 gap-2 z-[2] opacity-80'>
            <button onClick={()=>setCurrIdx(prev => Math.abs((prev - 1) % (landingData.length - 1)))} className='rounded-full flex items-center border border-white text-white p-2 hover:scale-[80%] hover:border-primary hover:text-primary transition-all'><ArrowBackIosNewOutlinedIcon fontSize='small'/></button>    
            <button onClick={()=>setCurrIdx(prev => Math.abs((prev + 1) & (landingData.length - 1)))} className='rounded-full flex items-center border border-white text-white p-2 hover:scale-[80%] hover:border-primary hover:text-primary transition-all'><ArrowForwardIosOutlinedIcon fontSize='small'/></button>    
        </div>
    </section>
  )
}

export default LandingCarousel