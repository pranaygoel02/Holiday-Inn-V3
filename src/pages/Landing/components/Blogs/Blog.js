import React from 'react'
import Bg1 from '../../../../assets/images/8.jpg'
import Bg2 from '../../../../assets/images/2 (1).jpg'
import Stars from '../../../../components/Stars/Stars'
import Phone from '../../../../components/Phone/Phone'
import Header from '../../../../components/Header/Header'
import ServiceCard from '../../../../components/ServiceCard/ServiceCard'
import BlogCard from '../../../../components/BlogCard/BlogCard'

import {data} from './data'

function Blog() {
  return (
    <section className='flex flex-col px-8 md:px-[12rem] justify-center bg-[#222222]' style={{paddingTop:'6rem',paddingBottom:'3rem'}}>
      <Header sub={'Hotel Blog'} subColor='text-primary' main={'Our Blogs'} mainColor='text-white'/>
      <div className='flex flex-col md:flex-row items-stretch gap-8 justify-center overflow-y-scroll pt-6'>
        {data.map(blog => <BlogCard key={blog.id} data={blog}/>)}
      </div>
    </section>
  )
}

export default Blog