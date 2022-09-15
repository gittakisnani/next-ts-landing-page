import Image, { StaticImageData } from 'next/image'
import React from 'react'
import{ Fade } from 'react-awesome-reveal'
const Blog = ({ img } :{ img: StaticImageData}) => {
  return (
    <div className='flex flex-col'>
      <Fade >
      <div className=''>
        <Image src={img} alt='Blog post' />
      </div>
      <div className='bg-white py-4 md:py-6 text-slate-500 font-medium'>
        <h3 className='text-2xl font-semibold leading-8 text-black'>
        Make Your Business More Profitable
        </h3>
        <p>Ham Brook • Jan 18, 2019• <span className='text-primary'>News</span></p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>

        <a className='text-primary'>Continue Reading...</a>
      </div>
      </Fade>
    </div>
  )
}

export default Blog