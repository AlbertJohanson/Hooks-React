/* eslint-disable import/imports-first */
/* eslint-disable import/prefer-default-export */
import React, {useLayoutEffect, useRef} from 'react';
import { useFetch } from '../../hooks/useFetch';

import 'bootstrap/dist/css/bootstrap.css';
import './layout.css'
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {

  const {count, increment}= useCounter(1)

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${count}`
  );

  const { author, quote } = !!data && data[0];

  const pTag = useRef()

  useLayoutEffect(() => {
      console.log(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p 
          className="mb-0"
          ref={pTag}
        >
          {quote}
        </p>

        <button className="btn btn-primary" type="button" onClick={increment}>
          Siguiente frase
        </button>
      </blockquote>
    </div>
  );
};
