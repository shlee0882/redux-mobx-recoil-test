// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
