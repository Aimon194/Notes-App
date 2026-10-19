import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './arror'

const Left = () => {
  return (
    <div className='h-full w-1/3 justify-between  flex-col flex'>
        <HeroText/>
        <Arrow/>
      
    </div>
  )
}

export default Left
