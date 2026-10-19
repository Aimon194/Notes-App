import React from 'react'

const CardCoverText = (props) => {
  return (
    <div>
      <div className=' p-6 flex flex-col justify-between absolute top-0 left-0 h-full w-full'>
        <h1 className='text-3xl bg-white rounded-full font-medium flex h-12 w-12 justify-center items-center'>{props.id+1}</h1>
        <div>
            <p className=' text-white text-lg font-medium leading-relaxed mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cumque possimus excepturi commodi voluptate atque!</p>
        <button style={{backgroundColor:props.color}} className={`text-medium text-white rounded-full py-2 px-7`}>{props.tag}</button>
        <button style={{backgroundColor:props.color}} className='ri-arrow-right-line text-medium  text-white rounded-full py-2 px-4'></button>
        </div>
        
      </div>
    </div>
  )
}

export default CardCoverText
