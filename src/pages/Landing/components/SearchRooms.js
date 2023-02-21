import React from 'react'
import Button from '../../../components/Button/Button'
import Header from '../../../components/Header/Header'

function SearchRooms() {
  return (
    <section className='px-8 md:px-[12rem] py-[6rem] bg-secondary'>
        <Header sub='check now' main='search rooms'/>
        <form className='flex flex-col md:flex-row gap-4 md:gap-[0.1rem] w-full font-barlow py-4'>
            <input type={'date'} className='flex flex-1 p-4 focus:outline-none '/>
            <input type={'date'} className='flex flex-1 p-4 focus:outline-none '/>
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
            <select className='flex flex-1 p-4 focus:outline-none '>
                <option value='1'>1 Room</option>
                <option value='2'>2 Room</option>
                <option value='3'>3 Room</option>
                <option value='4'>4 Room</option>
            </select>
            <Button flex='flex-1' type={'submit'} text='Check now' primaryColor='bg-primary' hoverColor='hover:bg-[#222222]' textColor={'text-white'}/>
        </form>
    </section>
  )
}

export default SearchRooms