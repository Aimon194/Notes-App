import React, { useState } from "react";

const form = () => {

    const [task,setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [details,setDetails]=useState("");
  const submitter = (e) => {
    
    e.preventDefault();
    const copyTask=[...task];

    copyTask.push({title,details})
    setTask(copyTask);
    setTitle("");
    setDetails("");

    
  };

  function deletion(idx){
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  return (
    <div className="h-screen    lg:flex text-white" > 
      <form
        onSubmit={(e) => {
          submitter(e);
        }}
        className=" flex-col flex lg:w-1/2 p-10 items-start gap-5"
      >
        <input
          className="border text-white w-full border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="border w-full flex items-start flex-row text-white border-gray-300 rounded h-30 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          type="text"
          placeholder="Write Details..."
          value={details} onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 w-full active:scale-80 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-1-2 p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4 text-white">Your Notes</h1>
        <div className="  flex flex-wrap gap-4">
            {task.map(function(elem,idx){
                return <div key={idx} className="h-50 p-3 justify-between bg-cover bg-[url('https://simg.nicepng.com/png/small/93-938738_note-paper-png-download-handwriting.png')] flex flex-col items-center  text-black rounded-2xl w-40">
                    <div>
                        <h3 className="text-xl mb-1 leading-tight font-bold">{elem.title}</h3>
                    <h5 className="mt-2 leading-tight ">{elem.details}</h5>
                    </div>
                    <button onClick={()=>{
                        deletion(idx);
                    }} className=" bg-red-600 p-2 text-white rounded-2xl">Delete</button>

                </div>;
            })}

          
          
        
        </div>
      </div>
    </div>
  );
};

export default form;
