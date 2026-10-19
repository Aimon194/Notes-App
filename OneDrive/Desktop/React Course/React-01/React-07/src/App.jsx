import React, {useState} from 'react'

const App = () => {
  const [name, setName] = useState('');
  const formsubmitter=(e)=>{
        
        e.preventDefault();
        console.log('form submitted by',name);
        setName('');
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        formsubmitter(e);
      }}>
        <input type="text" placeholder="Enter your name" value={name} onChange={ (e)=>{
          setName(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>

  )
}

export default App
