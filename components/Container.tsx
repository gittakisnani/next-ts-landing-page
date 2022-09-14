import React from 'react'
import { ContainerProps } from '../types/types'

const Container = ({ children } : ContainerProps) => {
  return (
    <div className='mx-auto max-w-[1200px] w-full p-4 md:p-6'>
        {children}
    </div>
  )
}

export default Container