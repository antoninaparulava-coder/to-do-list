import styles from "./Button.module.css"
function Button({handleAddTodo}) {
  return <button onClick={() => handleAddTodo()} className={styles.button}>Add</button>

}

export default Button