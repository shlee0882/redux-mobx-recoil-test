// src/components/RecoilTodoList.js
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from '../../state/recoil/todoState';
import TodoItem from '../TodoItem';

const RecoilTodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const toggleTodo = (id) => {
    setTodoList(oldTodoList =>
      oldTodoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodoList(oldTodoList =>
      oldTodoList.filter(todo => todo.id !== id)
    );
  };

  return (
    <div>
      <h2>Recoil Todo List</h2>
      <ul>
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecoilTodoList;
