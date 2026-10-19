import React from 'react'
import Section1 from './components/Section 1/section1'
import Section2 from './components/Section 2/section2'

const users = [
  {
    img:'https://cdn.freepixel.com/thumb/free-photos-indian-businesswoman-at-workplace-photo---an-attractive-young-woman-in-a-business-suit-sitting-at-a-th-1004206788.jpg',
    intro:'',
    tag:'Satisfied',
    color:'blue'
  },
  {
    img:'https://img.magnific.com/free-photo/african-man-black-suit_1157-46903.jpg?semt=ais_hybrid&w=740&q=80',
    intro:'',
    tag:'Underserved',
    color:'green'
  },
  {
    img:'https://img.magnific.com/free-photo/guy-black-suit-male-restaurant_1157-46256.jpg?semt=ais_hybrid&w=740&q=80',
    intro:'',
    tag:'Underbanked',
    color:'red'
  }
]
const App = () => {
  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
