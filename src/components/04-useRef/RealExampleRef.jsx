/* eslint-disable import/prefer-default-export */
import React, { useState, useRef, useEffect } from 'react';

import { MultipleCustomHooks } from '../03-CustomHook/MultipleCustomHooks';

import '../../styles/components/App.css';
export const RealExampleRef = () => {

  const isMounted = useRef(true)

  const [show, setShow] = useState(false);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

  const handleShow = () => {
      setShow( !show )
  }

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={handleShow} type="button">
        Show/Hide
      </button>
    </div>
  );
};
