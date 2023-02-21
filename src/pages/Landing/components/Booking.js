import React from 'react'
import Button from '../../../components/Button/Button'
import Header from '../../../components/Header/Header'
import Phone from '../../../components/Phone/Phone'
import Stars from '../../../components/Stars/Stars'

import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel'

function Booking() {
  return (
    <section className=' relative flex flex-col bg-black/20'>
        <div className='px-8 md:pl-[12rem] py-[6rem] flex flex-col flex-1 items-start gap-4 text-white md:max-w-[50%]'>
            <Stars value={5}/>
            <Header main='Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.' mainColor={'text-white'} mainSize='text-2xl'/>
            <Phone flex={'flex-row-reverse'} position='block' font='text-white' outline='outline-0' text='Reservation' header='text-white'/>
            <small>Call us, it's toll free.</small>
        </div>
        <div className='px-8 md:px-[12rem] bg-white w-full p-4'>
            <div className='md:max-w-[55%]'>
                <ImageCarousel/>
            </div>
        </div>
        <form className='flex flex-col gap-4 w-full font-barlow md:absolute md:max-w-[30%] bg-secondary p-8 py-12 z-10 bottom-[4rem] right-[12rem] flex-wrap'>
            <Header main='Hotel Booking Form' sub={'Rooms & suites'} mainSize='text-3xl'/>
            <hr></hr>
            <input type={'date'} className='flex flex-1 p-4 focus:outline-none '/>
            <input type={'date'} className='flex flex-1 p-4 focus:outline-none '/>
            <div className='flex gap-4'>
            <select className='flex flex-1 p-4 focus:outline-none '>
                <option value='1'>1 Adult</option>
                <option value='2'>2 Adult</option>
                <option value='3'>3 Adult</option>
                <option value='4'>4 Adult</option>
            </select>
            <select className='flex flex-1 p-4  focus:outline-none'>
                <option value='1'>1 Child</option>
                <option value='2'>2 Children</option>
                <option value='3'>3 Children</option>
                <option value='4'>4 Children</option>
            </select>
            </div>
            <Button flex='flex-1' type={'submit'} text='Check now' primaryColor='bg-primary' hoverColor='hover:bg-[#222222]' textColor={'text-white'}/>
        </form>
    </section>
  )
}

export default Booking