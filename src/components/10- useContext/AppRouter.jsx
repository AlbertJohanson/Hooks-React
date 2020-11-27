/* eslint-disable import/prefer-default-export */
import React from 'react'
import {
    BrowserRouter ,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

  /* Component */
import { HomeScreen  } from './HomeScreen'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <>

          <NavBar />
          <Switch>
            <Route exact path='/' component={HomeScreen} />

            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/login' component={LoginScreen} />


            <Redirect to='/' /> 
          </Switch>
        </>
      </BrowserRouter>
    );
}
