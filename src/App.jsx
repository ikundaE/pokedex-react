import { useState } from 'react'
import Input from './components/Input'
import Pokedex from './components/Pokedex'
import './App.css'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <div className="main" >
        <Input className="input" setName={setName} />
        <Pokedex className="pokedex" name={name} />
      </div>
    </>
  )
}

export default App
