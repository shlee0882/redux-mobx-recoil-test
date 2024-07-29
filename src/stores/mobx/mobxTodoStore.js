import { makeAutoObservable } from 'mobx';

class MobxTodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text) {
    this.todos.push({ id: Date.now(), text, completed: false });
  }

  toggleTodo = (id) => {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo = (id) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

const mobxTodoStore = new MobxTodoStore();
export default mobxTodoStore;
