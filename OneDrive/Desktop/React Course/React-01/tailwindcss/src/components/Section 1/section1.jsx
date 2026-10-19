import React from 'react'
import Navbar from './navbar'
import Page1 from './Page1'
const section1 = (props) => {
  return (
    <div className=' h-screen w-full'>
      <Navbar/>
      <Page1 users={props.users}/>
    </div>
  )
}

export default section1
