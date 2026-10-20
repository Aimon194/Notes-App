import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index,setIndex] = useState(1);

  const Next = ()=>{
    setUserData([]);
    setIndex(index+1)
    
  }

  const Prev = ()=>{
    if (index>1) {
      setUserData([]);
      setIndex(index-1);
      
    }
    
  }

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    console.log(response);
    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h4 className='flex text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h4>

  if (userData.length>0) {
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
      
      
    })
    
  }

  return (
    <div className='object-cover overflow-auto h-screen' >
      
      <div className='flex gap-4 h-[85%] m-4  flex-wrap'>{printUserData}</div>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={Prev} className='py-2 mb-2 px-5 bg-amber-300 text-black text-xs active:scale-95 rounded-xl'>Prev</button>
        <h4 className='mb-2 text-white text-xs'>Page {index}</h4>      
      <button onClick={Next} className='py-2 mb-2 px-5 bg-amber-300 text-black text-xs active:scale-95 rounded-xl'>Next</button>
      </div>
    </div>
  )
} 

export default App
