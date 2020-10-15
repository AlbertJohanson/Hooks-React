/* eslint-disable import/prefer-default-export */
import  {useState} from 'react'

export const useCounter = ( initialCounter = 10 ) => {
    
    const [count, setCounter] = useState(initialCounter)

    const increment = (factor = 1) => {
        setCounter( count + factor)
    }
    

    const reset = () => {
        setCounter(initialCounter)
    }

    const Decrement = (factor = 1) => {
        setCounter( count - factor)
    }

    return {
        count,
        increment, 
        reset,
        Decrement
    }
}
