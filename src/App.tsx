import React, { useState } from 'react';

import Header from './components/Header/Header'
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm.tsx'
import styles from './App.module.css';
import './global.css'

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
    
      </main>
    </>
  )
}

export default App;
