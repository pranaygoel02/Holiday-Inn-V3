import React from 'react'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

function Phone({position,mode,rotate,icon,flex,font,header,outline,text}) {
  return (
     <a href='tel:+17148442806' className={`${position} top-[30%] z-10 left-[2rem] flex ${flex} items-center gap-4 opacity-80`}>
     <div className={`font-barlow_condensed uppercase ${rotate}`} style={{writingMode:mode}}>
         <p className={`${header} text-lg`}>{text}</p>
         <p className={`text-primary text-2xl font-medium ${font}`}>+1 714-844-2806</p>
     </div>
     <div className={`rounded-full flex items-center ${outline} outline-white text-white p-2 hover:scale-[80%] hover:border-primary hover:text-primary transition-all animate-breathe`}>
         <PhoneInTalkOutlinedIcon fontSize='large' className={icon}/>
     </div>
    </a>
  )
}

export default Phone