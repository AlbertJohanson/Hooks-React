/* eslint-disable import/imports-first */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

import { useCounter } from '../../hooks/useCounter';

/* Component */
import { Small } from './Small';

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/App.css';

export const Memorize = () => {
  const [show, setShow] = useState(true);

  const { count, increment } = useCounter(10);

  return (
    <div>
      <h1>
        Counter:
        <Small value={count} />
      </h1>
      <hr />
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
