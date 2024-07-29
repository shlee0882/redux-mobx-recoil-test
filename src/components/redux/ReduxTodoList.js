// src/components/ReduxTodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../../stores/redux/features/todosSlice';
import TodoItem from '../TodoItem';

const ReduxTodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Todo List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onRemove={() => dispatch(removeTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReduxTodoList;
