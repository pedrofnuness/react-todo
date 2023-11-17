import React from 'react';
import { LuClipboardList, LuTrash2 } from "react-icons/lu";
import styles from './TodoList.module.css';

type Props = {
  taskList: TaskProps[];
}

export default function TodoList({ taskList }: Props) {
  return (
    <section className={styles.container}>
      <header className={styles.listHeader}>
        <p className={styles.tasksCreated}>
          Created tasks <span>{taskList.length}</span>
        </p>
        <p className={styles.tasksCompleted}>
          Completed <span>0</span>
        </p>
      </header>

      {taskList.length ? (
        taskList.map(task => (
          <div className={styles.taskContainer}>
            <input
              type="checkbox"
              name="task-checkbox"
              id={`checkbox-task-${task.id}`}
              className={styles.checkbox}
            ></input>
            <p>{task.content}</p>
            <LuTrash2 title="Delete task"/>
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