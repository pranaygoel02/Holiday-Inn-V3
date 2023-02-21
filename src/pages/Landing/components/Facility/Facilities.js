import React from 'react'
import FacilityCard from '../../../../components/FacilityCard/FacilityCard'
import Header from '../../../../components/Header/Header'

import {data} from './data'

function Facilities() {
  return (
    <section className='px-8 md:px-[12rem] bg-white' style={{paddingTop:'6rem',paddingBottom:'6rem'}}>
      <Header sub='Our services' main='Hotel Facilities'/>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-8 justify-between pt-4'>
        {data.map(facility => <FacilityCard key={facility.id} data={facility}/>)}
      </div>
    </section>
  )
}

export default Facilities