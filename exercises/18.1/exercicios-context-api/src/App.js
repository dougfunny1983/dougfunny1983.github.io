import React from 'react';

import './App.css';
import { ToDoList } from './componets/ToDoList';

const App = () => {
  return <div className="App">{<ToDoList />}</div>;
};

export default App;
