import React from 'react';
import { LuClipboardList } from "react-icons/lu";
import styles from './TodoList.module.css';


type Props = {
  taskList: string[]
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

      <div className={styles.emptyList}>
        <LuClipboardList size={56}/>
        <p>
          <strong>You don't have tasks registered yet</strong>
          <br />
          Create tasks and organize your to-do items
        </p>
      </div>
    </section>
  )
}