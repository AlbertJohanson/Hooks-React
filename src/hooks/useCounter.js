/* eslint-disable import/prefer-default-export */
import  {useState} from 'react'

export const useCounter = ( initialCounter = 1 ) => {
    
    const [count, setCounter] = useState(initialCounter)

    const increment = () => {
        setCounter( count + 1)
    }
    

    const reset = () => {
        setCounter(initialCounter)
    }

    const Decrement = () => {
        setCounter( count - 1)
    }

    return {
        count,
        increment, 
        reset,
        Decrement
    }
}
