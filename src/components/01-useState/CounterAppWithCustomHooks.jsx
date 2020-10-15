/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {useCounter} from '../../hooks/useCounter'

import '../../styles/components/App.css';

export const CounterWithCustomHook = () => {

    const {count, increment, reset , Decrement} = useCounter();

  return (
    <div>
      <h1>
        Counter
        <br />
        {count}
      </h1>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => Decrement()}>
        -1
      </button>
    </div>
  );
};
