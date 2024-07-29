// src/components/AddTodoMobx.js
import React, { useState } from 'react';
import mobxTodoStore from '../../stores/mobx/mobxTodoStore';

const AddTodoMobx = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      mobxTodoStore.addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo (MobX)</button>
    </form>
  );
};

export default AddTodoMobx;
