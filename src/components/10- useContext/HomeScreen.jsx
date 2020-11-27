/* eslint-disable import/prefer-default-export */
import React, {useContext} from 'react'

/* Style */
import '../../styles/components/App.css'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const {user} = useContext(UserContext)
    
    console.log(user)
    return (
      <div>
        <h1>Home Screen</h1>
        <hr />
        <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
    );
}
