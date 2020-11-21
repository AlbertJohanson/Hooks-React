/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/prefer-default-export */
import React from 'react';


/* Styles */
import '../styles.css';

export const TodoListItem = ({ todo, index, handleDelete, toggle }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => toggle(todo.id)}
      >
        {index + 1}
        .
        {todo.desc}
      </p>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
