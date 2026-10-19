import React,{useState} from 'react'


const decons = () => {

    const [num, setnum] = useState({name:'Aimon',usn:29});
    function Change(){
        const newnum = {...num};
        newnum.name='Aimon Shaikh';
        newnum.usn= '029';
        setnum(newnum);
        console.log(newnum);

    }
  return (
    <div>
        <h2>{num.name}, usn is {num.usn}</h2>
      <button onClick = {Change} >Click me</button>
    </div>
  )
}

export default decons
