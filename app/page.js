"use client"
import React, { use, useState } from 'react'
const page = () => {


  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [tasks, settasks] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(`Title: ${title}, Description: ${description}`);


    settasks([...tasks, {title ,description }])
    console.log(tasks);
    settitle("")
    setdescription("")
  }


  const deleteHandler = (i) => {

    let cpytask = [...tasks]
    cpytask.splice(i, 1)
    settasks(cpytask)


  }


  let renderTask = <h2 className='text-xl font-semibold backdrop-blur-md p-10 w-255 rounded-2xl border-2'>No Task Available</h2>

  if (tasks.length > 0) {
     renderTask = tasks.map((t, i) => {
    
    return (
    <li key={i} className='list flex justify-between text-white items-center flex-col p-5 m-5 rounded-xl w-100 h-50 border-2 border-black'>
      <h5 className='text-3xl font-semibold'>{t.title}</h5>
      <p className='text-md font-light'>{t.description}</p>


      <img src='https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-02-1024.png'
      className='w-5 h-5 cursor-pointer position: absolute right-3 top-2'
      onClick={() => {
        deleteHandler(i)
      }}
      />

      <button 
      className='bg-black w-35 text-white p-2 mt-5 rounded-md mx-10 my-10 hover:bg-white hover:text-black hover:border-2 hover:border-black'
      onClick={() => {
        deleteHandler(i)
      }}>
        Complete
      </button>
    {/* <button 
    onClick={() => {
      deleteHandler(i)
    }}>
      Delete
    </button> */}
    </li>
    )

  })

  }


 

  return (
    <>
      <h1 className='bg-black text-5xl text-white p-5 font-bold text-center w-1/3 ml-127 flex justify-center items-center rounded-3xl mt-5'>To Do List</h1>
      <form onSubmit={submitHandler} className='flex flex-row items-center justify-center my-7'>
        <input 
        type="text" 
        placeholder='Enter Task Title Here' 
        className='w-80 p-2 mt-5 text-black border-2 rounded-md px-4 py-2 mx-10 my-10' 
        value={title}
        onChange={(e) =>{
        settitle(e.target.value)
      }}
        />



        <input 
        type="text" 
        placeholder='Task Description' 
        className='w-100 p-2 mt-5 text-black border-2 rounded-md px-4 py-2 mx-10 my-10' 
        value={description}
        onChange={(e) =>{
        setdescription(e.target.value)}
      } 
        />



        <button 
        className='bg-black w-35 text-white p-2 mt-5 rounded-md mx-10 my-10 hover:bg-white hover:text-black hover:border-2 hover:border-black'
        type='submit'>Add Task
        </button>



      </form>

      <hr className='m-10' />
      <div className='p-8 rounded-md m-10'>
        <ul className='grid grid-cols-2 gap-10  justify-center-safe ml-40'>
          {renderTask}
        </ul>

      </div>
    </>
  )
}

export default page