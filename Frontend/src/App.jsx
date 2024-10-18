import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Bem vindo a Lanchonete Dias</h1>
      <button> <Link to='/login'>Login</Link> </button>
    </div>
    </>
  )
}

export default App
