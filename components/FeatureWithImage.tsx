import Image from 'next/image'
import Bookmark from '../public/assets/Bookmark.svg'
import { CardProps } from '../types/types'
import Card from './Card'

const FeatureWithImage = ({ index, person } : { index: number, person: CardProps}) => {
    const className = index % 2 ? 'md:flex-row' : 'md:flex-row-reverse'
    return (
    <div 
    className={`my-14 md:my-18 flex flex-col md:items-center min-h-[80vh] gap-10 ${className}`}>
              <div className='md:flex-gow'>
                <Image src={Bookmark} alt='Bookmark' />
              </div>
              <div className='flex flex-col gap-4 md:basis-[45%]'>
                <h2 className='text-3xl md:text-4xl md:max-w-[400px] !leading-[3rem]'>
                  Communicate and gather feedback
                </h2>
                <p className='text-lg text-slate-500 font-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.
                </p>
                <Card {...person}  />
              </div>
    </div>
  )
}

export default FeatureWithImage