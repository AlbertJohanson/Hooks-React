/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import  CounterApp from '../src/components/01-useState/useState'
/* import HookApp from '../HookApp';
 */
ReactDOM.render(<CounterApp />, document.getElementById('app'));
=======
import {CounterWithCustomHook} from './components/01-useState/CounterAppWithCustomHooks';

ReactDOM.render(<CounterWithCustomHook />, document.getElementById('app'));
>>>>>>> dcdb7b1237344a8f607e82cf69d46464fad71453
