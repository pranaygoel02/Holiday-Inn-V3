import React from 'react'
import InfoCard from '../../../components/InfoCard/InfoCard'
import disney from '../../../assets/images/disneyland.png'
import dinner from '../../../assets/images/dinner.jpg'

function InfoCards() {
  return (
    <section className='flex flex-col px-8 md:px-[12rem] bg-white py-[6rem]'>
        <InfoCard sub='Discover' main='Disneyland® Castle' para='Home to fun rides, magical live entertainment, unique shops, and beloved characters like Mickey Mouse, this family friendly theme park truly is the Happiest Place on Earth.' btn_text='LEARN MORE' pic={disney}/>
        <InfoCard flex='md:flex-row-reverse' sub='Discover' main='Medieval Times Dinner and Tournament' para='7662 Beach Blvd, Buena Park, California 90620 Category: Entertainment' btn_text='LEARN MORE' pic={dinner}/>
    </section>
  )
}

export default InfoCards