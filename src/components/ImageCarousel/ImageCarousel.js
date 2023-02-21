import React from 'react'
import S1 from '../../assets/images/4.png'

import './ImageCarousel.css'

function ImageCarousel() {
  return (
    <div className='overflow-hidden'>
    <div className='flex image-carousel'>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
        <img className='max-w-[12rem]' src={S1}/>
    </div>
    </div>
  )
}

export default ImageCarousel