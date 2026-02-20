import React,{ useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Todo from './Components/Todo'


function App() {
  
  const [todo,setTodo] = useState([])
  


  return (
    <div className='app'>
      <Header/>
      <main>
        <Todo/>
      </main>
    </div>
  )
}

export default App
