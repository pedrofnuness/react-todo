import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTaskForm.module.css';
import { FiPlusCircle } from "react-icons/fi";

type FormProps = {
  onSubmit: (inputValue: string) => void;
}

export function NewTaskForm({ onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input 
        type="text" 
        name="task-input"
        value={inputValue}
        placeholder='Add new Task'
        onChange={handleChangeInputValue}
        className={styles.newTaskInput}
      />

      <button
        type="submit"
        name="add-task-button" 
        aria-label="Add task button"
        disabled={!inputValue}
      >
        Add
        <FiPlusCircle size={16}/>
      </button>
    </form>
  )
}