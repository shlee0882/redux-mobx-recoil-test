// src/components/AddTodoRecoil.js
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../state/recoil/todoState';

const AddTodoRecoil = () => {
  const [text, setText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setTodoList(oldTodoList => [
        ...oldTodoList,
        { id: Date.now(), text, completed: false },
      ]);
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
      <button type="submit">Add Todo (Recoil)</button>
    </form>
  );
};

export default AddTodoRecoil;
