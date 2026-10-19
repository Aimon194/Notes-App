import React from 'react'
import CardCoverText from './CardCoverText'

const card = (props) => {
  return (
    <div className=' rounded-4xl shrink-0  overflow-hidden relative h-full w-80'>
      
      <img src={props.img} alt="image" className='object-cover  h-full w-full'/>
      
      <CardCoverText color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default card
