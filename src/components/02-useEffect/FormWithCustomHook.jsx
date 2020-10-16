/* eslint-disable import/imports-first */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';

import { useForm } from '../../hooks/useForm';

import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/02-useEffect-styles/useEffect.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleSubmit] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
