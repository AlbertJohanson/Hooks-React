/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react'


/* Style */
import '../../styles/components/App.css'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext) 


    const handleClick = () => {
        setUser({});
    }

    return (
      <div>
        <h1>About Screen</h1>
        <hr />

        <pre>{JSON.stringify(user, null, 3)}</pre>
        <button type="button" className="btn btn-warning" onClick={handleClick}>
          Logout
        </button>
      </div>
    );
}
