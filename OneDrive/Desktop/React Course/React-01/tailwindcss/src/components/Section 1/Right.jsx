import React from 'react'
import Card from './card'
const Right = (props) => {
  return (
    <div id='right' className=' gap-3 flex flex-nowrap p-2 overflow-x-auto h-full w-2/3'>
      {props.users.map(function(elem,idx){
        return <Card key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
      
      
      
    </div>
  )
}

export default Right
