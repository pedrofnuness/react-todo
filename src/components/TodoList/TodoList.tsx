import React from 'react';
import styles from './TodoList.module.css';

type Props = {
  taskList: string[]
}

export default function TodoList({ taskList }: Props) {
  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tasksCreated}>
          Tarefas criadas <span>{taskList.length}</span>
        </p>
        <p className={styles.tasksCompleted}>
          Concluídas <span>0</span>
        </p>
      </header>
    </section>
  )
}