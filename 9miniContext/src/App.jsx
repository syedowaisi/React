import {useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/profile'


function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-green-300'> React is important</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
