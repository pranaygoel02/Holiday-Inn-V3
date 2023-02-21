import React from 'react'
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';

function FacilityCard({data}) {
  return (
    <div className='flex flex-[30%] flex-col gap-4 p-4 rounded-lg outline outline-1 outline-gray-300/50'>
        <div className='text-primary'>
          {data.icon}
        </div>
        <h2 className='font-gilda text-2xl'>{data.header}</h2>
        <p className='font-barlow text-gray-600'>{data.subheader}</p>
    </div>
  )
}

export default FacilityCard