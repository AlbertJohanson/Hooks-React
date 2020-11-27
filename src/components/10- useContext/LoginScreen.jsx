/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react'


/* Style */
import '../../styles/components/App.css'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    return (
      <div>
        <h1>Login Screen</h1>
        <hr />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            setUser({
              id: 123,
              name: 'Albert',
            })
          }
        >
          Login
        </button>
      </div>
    );
}
