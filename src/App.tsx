import React, { useState } from 'react';

import Header from './components/Header/Header'
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm.tsx'
import styles from './App.module.css';
import './global.css'
import TodoList from './components/TodoList/TodoList.tsx';

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);
  
  const handleCreateTask = (inputValue: string) => {
    setTaskList((prevState) => [...prevState, inputValue])
  };

  return (
    <>
      <Header />

      <main className={styles.content}>
        <NewTaskForm onSubmit={handleCreateTask}/>
        <TodoList taskList={taskList}/>
      </main>
    </>
  )
}

export default App;
