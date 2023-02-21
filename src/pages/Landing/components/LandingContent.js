import React from 'react'
import Stars from '../../../components/Stars/Stars'
import Button from '../../../components/Button/Button'

function LandingContent({data}) {
  return (
    <div key={data.id} id='landing-content' className='z-[2] flex flex-col items-center justify-center min-h-screen gap-4 uppercase text-white text-center max-w-[38rem] m-auto'>
        <Stars value={5} size={'medium'}/>
        <h3 className='animate-up animate-up-delay-100 font-barlow_condensed tracking-[0.5rem] text-sm md:text-lg font-medium'>{data.subheader}</h3>
        <h2 className='animate-up animate-up-delay-200 font-gilda text-3xl md:text-6xl leading-normal tracking-wider'>{data.header}</h2>
        <Button primaryColor='bg-transparent' hoverColor='hover:bg-white' textColor='text-white' hoverTextColor='hover:text-primary' text={'Rooms & Suites'}/>
    </div>
  )
}

export default LandingContent