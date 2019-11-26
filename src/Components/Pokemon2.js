import React from 'react'
import useFetch from './useFetch'
import Counter from './Counter'

export default function Pokemon(props) {
    const pokemon = useFetch(props.url)

    return (
        pokemon
        && 
        <div className='poke-card'>
          <div className='poke-header'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt='pokemon sprite' />
          </div>
          <Counter />
        </div>
      )
}