import React from 'react'

const form = () => {

    const formsubmitter=(e)=>{
        
        e.preventDefault();
        console.log('form submitted');
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        formsubmitter(e);
      }}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default form
