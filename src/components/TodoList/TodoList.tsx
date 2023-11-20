import React, { useState } from 'react';
import { LuClipboardList, LuTrash2 } from "react-icons/lu";
import styles from './TodoList.module.css';

type Props = {
  taskList: TaskProps[];
  deleteTaskFromList: (taskId: string) => void;
}

export default function TodoList({ taskList, deleteTaskFromList }: Props) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const removeFromCompletedTasks = (taskIdToRemove: string) => {
    setCompletedTasks(prevState => prevState.filter(taskId => taskId !== taskIdToRemove))
  }

  const handleClickOnTask = (taskId: string) => {
    const taskAlreadyCompleted = !!completedTasks.find(task => task === taskId);

    if (taskAlreadyCompleted) {
      removeFromCompletedTasks(taskId)
    } else {
      setCompletedTasks(prevState => [...prevState, taskId]);
    }
  };

  const handleDeleteTask = (taskIdtoDelete: string) => {
    removeFromCompletedTasks(taskIdtoDelete);
    deleteTaskFromList(taskIdtoDelete);
  };

  return (
    <section className={styles.container}>
      <header className={styles.listHeader}>
        <p className={styles.tasksCreated}>
          Created tasks <span>{taskList.length}</span>
        </p>
        <p className={styles.tasksCompleted}>
          Completed <span>{completedTasks.length} of {taskList.length}</span>
        </p>
      </header>

      {taskList.length ? (
        taskList.map(task => (
          <div key={task.id} className={styles.taskContainer}>
            <input
              type="checkbox"
              name="task-checkbox"
              id={`checkbox-task-${task.id}`}
              className={styles.checkbox}
              onClick={() => handleClickOnTask(task.id)}
            />
            <p>{task.content}</p>
            <button
              title="Delete task"
              className={styles.deleteTaskButton}
              onClick={() => handleDeleteTask(task.id)}
            >
              <LuTrash2 size={16}/>
            </button>
          </div>
        ))
      ) : (
        <div className={styles.emptyList}>
          <LuClipboardList size={56}/>
          <p>
            <strong>You don't have tasks registered yet</strong>
            <br />
            Create tasks and organize your to-do items
          </p>
        </div>
      )}
    </section>
  )
}