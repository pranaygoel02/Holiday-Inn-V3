import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import Stars from '../../../components/Stars/Stars'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import vid from '../../../assets/videos/video.mp4'


function VideoBar() {

  const [playVideo,setPlayVideo] = useState(false)

  return (
    <>
    <div className='flex flex-col items-center justify-center p-[6rem] gap-2 bg-black/20'>
        <Stars value={5}/>
        <Header sub='Holiday Inn Express & Suites' subColor={'text-white'} main='Promotional Video' mainColor={'text-white'} itemsAlign='text-center'/>
        <button onClick={()=>setPlayVideo(true)} className='outline outline-1 outline-white border outline-offset-4 rounded-full p-4 hover:text-white text-primary transition-all bg-white hover:bg-transparent'>
            <PlayArrowOutlinedIcon sx={{fontSize:'3rem'}}/>
        </button>
    </div>
    {playVideo && <div className='fixed -translate-y-[50%] top-[50%] left-[50%] -translate-x-[50%] h-min w-[90%] md:h-[50%] md:w-[50%] bg-black z-10'>
      <button onClick={()=>setPlayVideo(false)} className='text-white p-2'>
      <ClearRoundedIcon/>
      </button>
      <video autoPlay loop playsInline controls width={'100%'} height={'656px'} style={{ objectFit: 'cover' }} >
        <source src={vid} type="video/mp4" />
      </video>
      </div>}
    </>
  )
}

export default VideoBar