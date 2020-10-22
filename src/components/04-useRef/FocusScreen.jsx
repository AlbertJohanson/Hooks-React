/* eslint-disable import/prefer-default-export */
import React, {useRef} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../../styles/components/App.css';

export const FocusScreen = () => {

    const inputRef = useRef()


    const handleClick = () => {
        inputRef.current.select()
    }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="Su nombre" />

      <button
        className="btn btn-primary mt-5"
        type="button"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  );
};
