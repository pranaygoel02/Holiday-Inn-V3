import React from 'react'
import Bg1 from '../../../../assets/images/8.jpg'
import Bg2 from '../../../../assets/images/2 (1).jpg'
import Stars from '../../../../components/Stars/Stars'
import Phone from '../../../../components/Phone/Phone'
import Header from '../../../../components/Header/Header'
import ServiceCard from '../../../../components/ServiceCard/ServiceCard'

import {data} from './data'

function ExtraServices() {
  return (
    <section className='flex flex-col gap-6 px-8 md:px-[12rem] md:flex-row items-center justify-center md:py-[6rem] bg-[#222222]' style={{paddingTop:'6rem',paddingBottom:'6rem'}}>
        <div className='flex flex-col gap-4 items-start font-barlow md:py-20 md:pr-8' style={{flexBasis:'40%'}}>
            <Header sub={'BEST PRICES'} subColor='text-primary' main={'Amenities'} mainColor='text-white'/>
            <div className='gap-4 flex flex-col text-gray-400'>
                <p>Whether you're visiting Southern California for a family vacation or a romantic weekend escape, you'll find a host of lifestyle amenities at our brand new hotel resort in Anaheim. Take a refreshing dip in our sparkling outdoor pool and relax in our bubbling spa tub.</p>
                <p>Stay on task with complimentary Wi-Fi. Wake up to a complimentary hot breakfast offering all of your morning favorites or grab a snack in our convenient Marketplace Deli. From stylish guestrooms and suites to a 24-hour fitness center.</p>
            </div>
            <Phone text={'For information'} flex='flex-row-reverse' icon='text-primary' header='text-gray-300 tracking-wider normal-case'/>
        </div>
        <div className='flex flex-col md:flex-row items-stretch gap-8 justify-end overflow-hidden ' style={{flexBasis:'60%'}}>
            {data.map(service => <ServiceCard key={service.id} data={service}/>)}
        </div>
    </section>
  )
}

export default ExtraServices