/* eslint-disable import/imports-first */
/* eslint-disable import/prefer-default-export */
import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';

/* Component */
import { Small } from './Small';

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/App.css';

export const MemoHooks = () => {


  const [show, setShow] = useState(true);

  const { count, increment } = useCounter(5000);

  const procesoPesado = ( iteraciones ) => {
    for( let i = 0; i < iteraciones; i ++ ) {
        console.log('Ahí vamos..')
    }

    return `${iteraciones} iteraciones realizadas.`
  }

  const memoProcesoPesado = useMemo(() => procesoPesado(count), [ count ])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: 
        <small>{count}</small> 
      </h3>
      <hr />

      <p>{ memoProcesoPesado }</p>

      <button type="button" className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </div>
  );
};
