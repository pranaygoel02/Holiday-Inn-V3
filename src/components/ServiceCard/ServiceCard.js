import React from 'react'
import Bg from '../../assets/images/4.jpg'

function ServiceCard({data}) {
  return (
    <div className='flex-[50%] bg-white flex-1 font-barlow text-gray-700'>
        <img src={data.bg}/>
        <div className='p-8 flex flex-col gap-2'>
            <h3 className='font-gilda text-primary text-2xl'>{data.header}</h3>
            <h2>{data.subheader}</h2>
            {/* <span className='font-gilda text-primary text-4xl'>$30</span> */}
            {/* <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul> */}
        </div>
    </div>
  )
}

export default ServiceCard