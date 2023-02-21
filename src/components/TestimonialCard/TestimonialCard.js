import React from 'react'
import Stars from '../Stars/Stars'
import Quote from '../../assets/images/quote.png'
import Person from '../../assets/images/person.jpg'

function TestimonialCard({data}) {
  return (
    <div className='text-white animate-up font-barlow flex flex-col gap-4'>
        <p>{data.review}</p>
        <div className='flex w-full items-center justify-between'>
            <div className='flex gap-2'>
                <img className='rounded-full object-cover w-[5rem]' style={{aspectRatio:1/1}} src={data.pic}/>
                <div>
                <Stars value={5}/>
                <h1 className='text-lg'>John Doe</h1>
                <p>Guest</p>
                </div>
            </div>
            <img className='opacity-10 max-w-[6rem]' src={Quote}/>
        </div>
    </div>
  )
}

export default TestimonialCard