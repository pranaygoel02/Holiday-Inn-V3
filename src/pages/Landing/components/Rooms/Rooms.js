import React from 'react'
import Header from '../../../../components/Header/Header'
import RoomCard from '../../../../components/RoomCard/RoomCard'

import { roomData } from './data'

function Rooms() {
  return (
    <section className='px-8 md:px-[12rem] bg-[#f8f5f0]' style={{paddingTop:'6rem',paddingBottom:'6rem'}}>
        <Header sub='HOLIDAY INN EXPRESS & SUITES' main='Rooms & Suites'/>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-8 justify-between py-4'>
        {roomData.map(room => <RoomCard key={room.id} data={room}/>)}
        </div>
    </section>
  )
}

export default Rooms