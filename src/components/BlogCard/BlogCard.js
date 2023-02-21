import React from 'react'
import Button from '../Button/Button'
import Bg from '../../assets/images/1 (1).jpg'

function BlogCard({data}) {
  return (
   <div className='flex-1 relative min-w-[31%] room-card' style={{flexBasis:'33%'}}>
    <div className='w-full relative overflow-hidden'>
      <img className='room-img min-h-[28rem] object-cover' src={data.pic}/>
      <div className='absolute w-full h-full top-0 z-[0] room-card-info'></div>
    </div>
    <div className='absolute text-center p-2 top-4 left-4 border text-white font-barlow'>
      <p>DEC</p>
      <p className='text-lg'>08</p>
    </div>
    <div className='z-10 blog-info p-4 min-w-[80%] max-w-[95%] m-auto bg-white'>
      {/* <p className='font-barlow uppercase tracking-wider'>fdlisfd</p> */}
      <h2 className='font-gilda text-2xl pt-2'>{data.title}</h2>
    </div>
   </div>
  )
}

export default BlogCard