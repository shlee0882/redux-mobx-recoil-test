// src/recoil/todoState.js
import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completed = todoList.filter(item => item.completed).length;
    const uncompleted = total - completed;
    return {
      total,
      completed,
      uncompleted,
    };
  },
});
