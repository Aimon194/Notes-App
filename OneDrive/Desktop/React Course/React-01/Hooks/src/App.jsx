import React, { useState } from "react";
import Decons from "./decons";
import Form from "./form";

const App = () => {

  // const [count, SetCount]= useState(0);

  // function increaseCount(){
  //   SetCount(count+1);
  // }
  // function decreaseCount(){
  //   SetCount(count-1);
  // }
  return (
    <div>
      {/* <h1>{count}</h1>
      <button className='btn' onClick={increaseCount}>Increase</button>
      <button className='btn' onClick={decreaseCount}>Decrease</button>
      <Decons/> */}
      <Form/>
    </div>
  );
};

export default App;
