import React from 'react'
import Card from '../Card/Card'
import styles from "./ToDoList.module.css"
import ToDoItem from '../ToDoItem/ToDoItem'
import Typography from '../Typography/Typography'
import { useFilterTodos } from '../../hooks/useFilterTodos'
function ToDoList() {
  const displayedTodos = useFilterTodos()
  return(
    <div className={styles.todoList}>
      {displayedTodos.length > 0 ? (
         displayedTodos.map((todo)=> (
        <Card key={todo.id}>
          <ToDoItem todo={todo}/>
          </Card>
      )) 
    ): (<Typography>No Tasks In This Category</Typography>
    )}
    </div>)
}

export default ToDoList