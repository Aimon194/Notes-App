import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1 = (props) => {
  return (
    <div className='py-10 px-10 gap-10 h-[90vh] flex justify-between'>
      <Left/>
      <Right users={props.users}/>
    </div>
  )
}

export default Page1
