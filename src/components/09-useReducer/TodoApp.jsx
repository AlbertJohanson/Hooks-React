/* eslint-disable import/prefer-default-export */
import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { todoReducer } from './todoReducer';

/* Styles */

import './styles.css';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList/TodoList';
import { TodoForm } from './TodoForm/TodoForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {



  const [todos, dispatch] = useReducer(todoReducer, [], init);


  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  

  const handleDelete = (todoID) => {

  const deleteTodo = {
      type: 'delete',
      payload: todoID,
    };

    
    dispatch(deleteTodo);
  };


  const toggle = (todoID) => {
    dispatch({
      type: 'toggle',
      payload: todoID,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }


  

  return (
    <div>
      <h1>
        Todo App (
        {todos.length}
        )
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <h3>Todos</h3>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            toggle={toggle}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm
            reset={reset}
            handleAddTodo={handleAddTodo}
            description={description}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
