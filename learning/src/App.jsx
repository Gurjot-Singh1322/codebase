import React from 'react'
import { useState } from 'react'
const App = () => {

  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")
  const [notes, setNotes] = useState([])

  const submitHandler = (e)=> {
    if(heading.trim() == "" || description.trim() == ""){
      alert("Please fill all the fields")
      return
    }
    e.preventDefault()

    setHeading("")
    setDescription("")
    setNotes([...notes, {heading, description}])
  }

  const deleteButton = (idx)=>{
    notes.splice(idx, 1)
    setNotes([...notes])
  }

  return (
   <div className='flex items-center justify-between bg-gray-900 '>
    <div className='h-screen w-1/3 border border-amber-20 p-2 '>
    <form onSubmit={(e)=>{submitHandler(e)}} className=' flex flex-col  items-center justify-between gap-6'>
      <input onChange={(e)=>{setHeading(e.target.value)}} value={heading} type='text' placeholder='Enter Heading' className='p-1 placeholder:text-center rounded-2xl text-white border-2 border-white h-10 w-full mt-10'></input>
      <textarea onChange={(e)=>{setDescription(e.target.value)}} value={description} type='text' placeholder='Enter Description' className='p-1 border-2 border-white text-white h-25 w-full rounded-2xl'></textarea>
      <button className='text-black font-bold px-4 py-2 bg-amber-400 rounded-2xl'>Submit</button>
    </form>
    </div>
    
    <div className='grid grid-cols-3 gap-10 border p-10 border-amber-200 w-2/3 h-screen overflow-auto'>
    <div className=' h-50 flex items-center justify-center bg-gray-950 rounded-4xl'><h1 className='font-extrabold text-3xl text-white'>Your Notes</h1></div>
    
    {notes.map((note, index)=> {
      return (
        <div key={index} className='flex flex-col items-center justify-between bg-amber-400 rounded-4xl h-50'>
          <div>
          <h1 required className='px-2 h-30% text-black font-bold text-xl'>{note.heading}</h1>
          <p required className=' p-2 text-sm h-70% w-full overflow-hidden text-black'>{note.description}</p>
          </div>
          <button onClick={()=>{deleteButton(index)}} className='mb-2 text-white font-bold px-4 py-2 bg-red-800 rounded-2xl'>Delete Note</button>
        </div>
      )
    })}
   
    </div>
   </div>
  )
}

export default App