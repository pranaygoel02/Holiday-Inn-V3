import React from 'react'

function Header({sub,main,subColor,mainColor,itemsAlign,mainSize}) {
  return (
    <div className={`flex flex-col gap-2 ${itemsAlign}`}>
        <p className={`tracking-[0.3rem] text-sm md:text-md font-barlow_condensed uppercase ${subColor}`}>{sub}</p>
        <h2 className={`font-gilda ${mainSize || 'text-4xl md:text-5xl'} leading-normal capitalize ${mainColor}`}>{main}</h2>
        <div></div>
    </div>
  )
}

export default Header