/* eslint-disable import/prefer-default-export */
import React, {memo} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/App.css'


export const Hijo = memo(({numero, incrementar}) => {

    console.log('Me volvi a generar :(')

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary mr-3"
          onClick={() => incrementar(numero)}
        >
          {numero}
        </button>
      </div>
    );
})
