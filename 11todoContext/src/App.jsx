import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './Contexts'
import TodoForm from './Component/todoForm'
import TodoItem from './Component/ToDoItem'
// import Datetime from Datetime

function App() {
  const [todos, setTodos] = useState([])
  const addToDo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev ])  //prev contains all the todos objects already stored ,then destructure(...prev)
  }

  const updateToDo=(id,todo)=>{
    setTodos((prev)=> prev.map( (prevtodo) => (prevtodo.id === id ? todo: prevtodo) ) )    //map is a loop, prevtodo is a individual todo object 
  }

  const deleteToDo=(id)=>{
    setTodos((prev)=> prev.filter((prevTodo) => prevTodo.id !== id)) 
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=> prev.map( (prevToDo) => prevToDo.id === id ? {...prevToDo,completed:!prevToDo.completed} :prevToDo ) ) 
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos")) 
    if(todos && todos.length >0){
      setTodos(todos) 
    }
  },[] )

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))  
  },[todos] )

  return (
    <ToDoProvider value={{todos, addToDo, updateToDo, deleteToDo, toggleComplete}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TodoForm/>
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map( (todo)=>(
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo}/>
              </div> 
            )) }
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}


export default App

// In React, a Context Provider is used to share data globally without passing props manually at every level.
// You create context:

// const ThemeContext = createContext();


// Then wrap components inside Provider:

// <ThemeContext.Provider value="dark">
//    <App />
// </ThemeContext.Provider>


// Now ANY component inside <App /> can access "dark" using:

// const theme = useContext(ThemeContext);


// No prop drilling needed.
