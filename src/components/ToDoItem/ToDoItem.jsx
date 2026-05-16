import Checkbox from "../Checkbox/Checkbox";
import Typography from "../Typography/Typography";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ToDoItem.module.css"
import pencil from "../../assets/pencil.png";
import check from "../../assets/check.png"
import trash from "../../assets/trash.png";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../reducer/todosSlice";
import { useState } from "react";
function ToDoItem({todo}) {
  const [editingMode, setEditingMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(updateTodo(newTodo));
    setEditingMode(false);
  }
  return (
    <>
         <div className={styles.TaskName}>
            <Checkbox  todo={todo}/>
            {editingMode ? (<input type="text" onChange={(e) => setNewTodo({...todo, name: e.target.value})}/> ) : (<Typography fontSize={24}>{todo.name}</Typography>)}
        </div>
        <div className={styles.actionButtons}>
            {editingMode ? <ActionButton icon={check} handleClick={()=> handleEdit()} />:<ActionButton icon={pencil} handleClick={()=> setEditingMode(true)} />}
            <ActionButton icon={trash} handleClick={()=> dispatch(deleteTodo(todo.id))} />
        </div>
    </>
  )
}

export default ToDoItem