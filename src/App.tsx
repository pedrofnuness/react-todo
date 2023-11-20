import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header'
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm.tsx'
import styles from './App.module.css';
import './global.css'
import TodoList from './components/TodoList/TodoList.tsx';

const taskMockArray = [
  {
    id: uuidv4(),
    content: 'Write the documentation'
  },
  {
    id: uuidv4(),
    content: 'Review open pull requests'
  },
  {
    id: uuidv4(),
    content: 'Write unit tests'
  },
];


function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>(taskMockArray);
  
  const handleCreateTask = (inputValue: string) => {
    const newTask: TaskProps = {
      id: uuidv4(),
      content: inputValue
    };
    setTaskList((prevState) => [...prevState, newTask])
  };

  const handleDeleteTask = (taskIdToDelete: string) => {
    setTaskList(prevState => prevState.filter(task => task.id !== taskIdToDelete));
  };

  return (
    <>
      <Header />

      <main className={styles.content}>
        <NewTaskForm onSubmit={handleCreateTask}/>
        <TodoList taskList={taskList} deleteTaskFromList={handleDeleteTask} />
      </main>
    </>
  )
}

export default App;
