import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(1)

    const increment = () => setCount(count + 1)

    const decrement = () => {
        if (count <= 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className='counter'>
            <h1 onClick={decrement}>-</h1>
            <h1>level {count}</h1>
            <h1 onClick={increment}>+</h1>
        </div>
    )
}

export default Counter