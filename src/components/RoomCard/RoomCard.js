import React from 'react'
import Bg from '../../assets/images/1 (1).jpg'
import Button from '../Button/Button'

import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import HotTubOutlinedIcon from '@mui/icons-material/HotTubOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

import './RoomCard.css'

function RoomCard({data}) {
  return (
    <div className='flex flex-1 w-full relative min-w-48 min-h-[450px] max-h-[500px] room-card overflow-hidden' style={{flexBasis:'30%'}}>
        <img className='w-full object-cover room-img' src={data.bg}/>
        <div className='room-card-info absolute w-full h-full flex flex-col justify-between items-end bg-black/20 transition-all  py-8'>
            <div className='-rotate-90'>
            <Button text={'Book'} mode={'vertical-rl'}/>
            </div>
            <div className='self-start text-white flex flex-col gap-4 w-full room-info px-4'>
              <p className='font-barlow_condensed tracking-[0.15rem] text-lg uppercase'>{data.price}$ / NIGHt</p>
              <h3 className='font-gilda text-3xl text-wrap'>{data.title}</h3>
              <hr className='self-start min-w-[30%] opacity-50 line'></hr>
              <div className='w-full flex items-center justify-between font-barlow'>
                <ul className='flex gap-2'>
                  <li><KingBedOutlinedIcon/></li>
                  <li><RoomServiceOutlinedIcon/></li>
                  <li><HotTubOutlinedIcon/></li>
                  <li><LuggageOutlinedIcon/></li>
                </ul>
                <button className='uppercase tracking-[0.1rem] text-sm'><span className='hover:text-primary transition-all'>Details</span> <EastOutlinedIcon/></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RoomCard