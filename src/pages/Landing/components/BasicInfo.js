import React from 'react'
import Bg1 from '../../../assets/images/buddha1.jpg'
import Bg2 from '../../../assets/images/room1.jpg'
import Stars from '../../../components/Stars/Stars'
import Phone from '../../../components/Phone/Phone'
import Header from '../../../components/Header/Header'

function BasicInfo() {
  return (
    <section className='flex flex-col px-8 md:px-[12rem] md:flex-row items-center justify-center bg-white py-6 md:py-[100px]'>
        <div className='flex flex-col gap-4 items-start font-barlow py-20' style={{flexBasis:'50%'}}>
            <Stars value={5} size={'small'}/>
            <Header sub={'Holiday Inn Express & Suites'} subColor='text-gray-500' main={'Enjoy a Luxury Experience'}/>
            <div className='gap-4 flex flex-col text-gray-500'>
                <p>Create memories at our resort and hotel in the heart of vibrant Anaheim, CA.</p>
                <p>Located steps away from Disneyland® Resort and DOWNTOWN DISNEY®, Holiday Inn Express & Suites Anaheim Resort features family inspired amenities, contemporary rooms and suites with 48" HDTVs and luxury bedding, and a beautiful resort setting.</p>
            </div>
            <Phone text='For information' outline='outline-none' flex='flex-row-reverse' icon='text-primary' header='text-black normal-case'/>
        </div>
        <div className='flex items-center gap-2 md:gap-8 justify-end md:h-[29rem] overflow-hidden' style={{flexBasis:'50%'}}>
            <div className='self-end md:w-80'>
                <img className='w-full' src={Bg1}/>
            </div>
            <div className='self-start md:w-80'>
                <img className='w-full' src={Bg2}/>
            </div>
        </div>
    </section>
  )
}

export default BasicInfo