/* eslint-disable import/prefer-default-export */
import React from 'react';

export const TodoForm = ({description, handleInputChange , handleAddTodo, reset}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (description.trim().length <= 1) {
          return;
        }
    
        const newTodo = {
          id: new Date().getTime(),
          desc: description,
          done: false,
        };
    
        const addTodo = {
          type: 'add',
          payload: newTodo,
        };
    
        handleAddTodo(addTodo);
        reset();
      };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        className="form-control"
        placeholder="Aprender....."
        autoComplete="off"
        value={description}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
        Agregar
      </button>
    </form>
  );
};
