// src/components/MobxTodoList.js
import React from 'react';
import { observer } from 'mobx-react-lite';
import mobxTodoStore from '../../stores/mobx/mobxTodoStore';
import TodoItem from '../TodoItem';

const MobxTodoList = observer(() => {
  return (
    <div>
      <h2>MobX Todo List</h2>
      <ul>
        {mobxTodoStore.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => mobxTodoStore.toggleTodo(todo.id)}
            onRemove={() => mobxTodoStore.removeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
});

export default MobxTodoList;
