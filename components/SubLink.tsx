import Link from 'next/link'
import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { SubLink } from '../types/types'
import { RiArrowRightSLine, RiArrowDownSLine, RiArrowUpSLine } from './Icons'

const SubLink = ({ text, link, secondSubLinks }: SubLink) => {
    const { width } = useWindowSize()
    const [secondSubLink, setSecondSubLink] = useState(false)

    const handleSecondSubLink = () => setSecondSubLink(!secondSubLink)
  return (
    <div className='md:relative bg-inherit'>
    <div className='flex justify-between items-center gap-2 hover:bg-[#d1d1d1]/40 md:hover:bg-inherit'>
        <Link href={link!}>
            <a className='navBar__link p-2 '>{text}</a>
        </Link>
        {secondSubLinks && 
                <button onClick={handleSecondSubLink}>
                    {width! >= 768 && <RiArrowRightSLine />}
                    {width! < 768 && secondSubLink && <RiArrowUpSLine />}
                    {width! < 768 && !secondSubLink && <RiArrowDownSLine />}
                </button>
        }
    </div>

                {secondSubLinks && 
                <>
                {secondSubLink && <div className='md:absolute bg-inherit top-[100%] z-[10000] left-[100%] flex flex-col w-max'>
                    {width! > 768 && <div className='absolute top-0 right-0 left-0 h-[2px] bg-primary'></div>}
                    {secondSubLinks.map(({ link, text }, index) => (
                        <Link href={link!} key={index}>
                            <a className='navBar__link p-2 hover:bg-[#d1d1d1]/40 md:hover:bg-inherit'>{text}</a>
                        </Link>
                    ))}
                </div>
                }
        </>}
    
    </div>
  )
}

export default SubLink