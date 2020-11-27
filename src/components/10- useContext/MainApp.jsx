/* eslint-disable import/prefer-default-export */
import React, {useState} from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

/* Style */
import '../../styles/components/App.css';


export const MainApp = () => {

    const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={ {
        user,
        setUser
    }}
    >

      <AppRouter />

    </UserContext.Provider>
  );
};
