// import { data } from 'autoprefixer'
import React,{useState,useEffect} from 'react'
import Header from '../../../../components/Header/Header'
import TestimonialCard from '../../../../components/TestimonialCard/TestimonialCard'

import { data } from './data'

function Testimonials() {

  const [currIdx, setCurrIdx] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIdx((prev) => {
                if (prev === data.length - 1) {
                    return 0
                } else {
                    return prev + 1
                }
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [data])


  return (
    <div className='px-8 md:px-[24rem] py-24 bg-black/30 flex flex-col items-start gap-4'>
        <Header sub={'TESTIMONIALS'} subColor={'text-white'} mainColor={'text-white'} main={"What Client's Say?"}/>
        <hr className='w-[20%] opacity-40'></hr>
        <TestimonialCard key={data[currIdx].id} data={data[currIdx]}/>
    </div>
  )
}

export default Testimonials