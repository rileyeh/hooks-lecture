// this is separate from Pokemon2, useFetch and Counter
// it was the first component we made during this lecture to show some of the basic use cases for hooks

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Pokemon() {
    const [pokemon, setPokemon] = useState(null)
    const [input, setInput] = useState(245)

    // as an optional second argument, we can pass a array to useEffect to tell it what to 'watch', then it will run only when that thing changes
    // leaving that array empty will cause the useEffect to run only once
    useEffect(() => {
        console.log('use effect ran')
        axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`).then(res => {
            setPokemon(res.data)
        })
    }, [input])

    // we used this to handle the empty input box, if it is empty, we just reset it back to the initial value
    const handleChange = e => {
        if (e.target.value.length < 1) {
            setInput(245)
        } else {
            setInput(e.target.value)
        }
    }
    console.log(111, pokemon)

    return (
        pokemon 
        &&
        <div className='poke-card'>
            <div className='poke-header'>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt='pokemon sprite'/>
            </div>
            <input onChange={handleChange}></input>
        </div>
    )
}

export default Pokemon