/* eslint-disable import/imports-first */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/App.css';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

  const {count, increment}= useCounter(1)

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${count}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading....</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
          <button className="btn btn-primary" type="button" onClick={increment}>
            Siguiente frase
          </button>
        </blockquote>
      )}
    </div>
  );
};
