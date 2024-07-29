// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import { store } from './stores/redux/store';
import ReduxTodoList from './components/redux/ReduxTodoList';
import MobxTodoList from './components/mobx/MobxTodoList';
import AddTodoRedux from './components/redux/AddTodoRedux';
import AddTodoMobx from './components/mobx/AddTodoMobx';
import RecoilTodoList from './components/recoil/RecoilTodoList';
import AddTodoRecoil from './components/recoil/AddTodoRecoil';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List with Redux, MobX, and Recoil</h1>
      <div className="container">
        <Provider store={store}>
          <div className="todo-section">
            <h2>Redux Implementation</h2>
            <AddTodoRedux />
            <ReduxTodoList />
          </div>
        </Provider>

        <div className="todo-section">
          <h2>MobX Implementation</h2>
          <AddTodoMobx />
          <MobxTodoList />
        </div>

        <RecoilRoot>
          <div className="todo-section">
            <h2>Recoil Implementation</h2>
            <AddTodoRecoil />
            <RecoilTodoList />
          </div>
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;