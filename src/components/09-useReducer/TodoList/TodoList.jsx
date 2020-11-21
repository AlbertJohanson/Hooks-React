/* eslint-disable import/prefer-default-export */
import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, toggle }) => {
  return (
    <ul className="list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleDelete={handleDelete}
          toggle={toggle}
        />
      ))}
    </ul>
  );
};
