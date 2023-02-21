import React from 'react'
import './Button.css'

function Button({text,onClick,type,mode,rotate,primaryColor,hoverColor,textColor,hoverTextColor,flex}) {
  return (
    <button onClick={onClick} type={type} style={{writingMode:'vertical-rl'}}
    className={`animate-up ${flex} h-auto animate-up-delay-300 px-4 py-2 border border-white text-white font-barlow_condensed uppercase font-light text-md ${rotate} tracking-[0.2rem] ${textColor} ${hoverTextColor} ${hoverColor} ${primaryColor} transition-colors duration-300 ease-in`}
    >{text}
    </button>
  )
}

export default Button