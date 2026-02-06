import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [counter, setCounter]=useState(5)   //this hook propagate the change in DOM

  // let counter=5
  const addvalue=()=>{
    console.log("clicked",counter)
    if(counter<20){
      setCounter(counter+1)  
    }
  }

  const decvalue=()=>{
    console.log("clicked",counter)
    if(counter>0){
      setCounter(counter-1)
    }
  }
  
  return (
    <>
      <h1> Chai aur react</h1>
      <h2> Counter Value:{counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={decvalue}>Decrease Value {counter}</button>

    </>
  )
}

export default App
