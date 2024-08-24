import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const f1 = useRef()
  const [todo, setTodo] = useState([]);
  
  function Add(event) {
    event.preventDefault();
    console.log(f1.current.value);
    todo.push(f1.current.value);
    setTodo([...todo]);
  }

  function del(index) {
    todo.splice(index,1)
    setTodo([...todo]);
  }

  function edit(index) {
    const editedVal = prompt("enter value")
    todo.splice(index,1,editedVal)
    setTodo([...todo]);
  }



  
  return (
    <>
    <h1>Todo App</h1>
    <form action="Calculator">
      <input  type="text" placeholder="Enter Items or Todo's" ref={f1}/>
      <button className='btn btn-primary' onClick={Add}>Add</button>
    </form> 
    <ul>
      {todo.map((items, index)=>{
        return <div key={index}>
                <li>{items}</li>
                <button className='btn-del' onClick={()=>{del(index)}}>Delete</button>
                <button className='btn-edit'onClick={()=>{edit(index)}}>edit</button>
               </div>
      })}
    </ul>
    </>
  )
}

export default App
