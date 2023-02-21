import React from 'react'
import Header from '../Header/Header'
import Button from '../Button/Button'
import Bg from '../../assets/images/1 (3).jpg'

function InfoCard({flex,sub,main,para,btn_text,pic}) {
  return (
    <div className={`flex flex-col md:flex-row ${flex}`}>
        <div className='md:min-w-[50%] overflow-hidden'>
            <img className='hover:scale-105 h-full w-full object-cover transition-all' src={pic}/>
        </div>
        <div className='flex flex-1 flex-col items-start justify-center gap-4 p-8 bg-[#f8f5f0]'>
            <Header sub={sub} main={main} mainSize='text-4xl'/>
            <p className='font-barlow pb-4 text-gray-600'>{para}</p>
            <Button primaryColor='bg-primary' hoverColor='hover:bg-[#222222]' textColor='text-white' text={btn_text}/>
        </div>
    </div>
  )
}

export default InfoCard