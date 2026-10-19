import React from 'react'

// const OnClick = () => {
//   console.log('Button clicked');
// }
// const OnChange = ()=>{
//   console.log('User is typing...');
// }

const PageScrolling=(elem) =>{
  console.log("Page scrollinf at speed...",elem)
}

const App = () => {
  return (
    <div onWheel={function(elem){
      PageScrolling(elem.deltaY);
    }}>
      {/* <input type="text " placeholder="Enter text here" onChange={function(elem){
        console.log(elem.target.value);
      }}></input>
      <button onClick={OnClick}>Click here </button> */}
      {/* <div onMouseMove={function(elem){
        console.log(elem.clientX,elem.clientY);
      }} className='box'></div> */}

      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
