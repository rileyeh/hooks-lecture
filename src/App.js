import React from 'react'
import './App.css'
import Pokemon from './Components/Pokemon2'

function App() {
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
  return (
    <div className="App">
      <Pokemon url={`${pokeUrl}1`}/>
      <Pokemon url={`${pokeUrl}4`}/>
      <Pokemon url={`${pokeUrl}7`}/>
    </div>
  )
}

export default App