/* eslint-disable import/prefer-default-export */
import React, {useState} from 'react'

/* Style */
import '../../styles/components/App.css'

export const CallbackHook = () => {

    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(count +1 )
    }

    return (
        <div>
            <h1>UseCallback Hook</h1>
            <hr/>
        </div>
    )
}
