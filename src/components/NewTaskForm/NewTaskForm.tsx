import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import styles from './NewTaskForm.module.css';
import { FiPlusCircle } from "react-icons/fi";

type FormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function NewTaskForm({ onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <input 
        type="text" 
        value={inputValue}
        placeholder='Add new Task'
        onChange={handleChangeInputValue}
        className={styles.newTaskInput}
      />

      <button
        type="submit"
        name="Add task button" 
        aria-label="Add task button"
        disabled={!inputValue}
      >
        Add
        <FiPlusCircle size={16}/>
      </button>
    </form>
  )
}