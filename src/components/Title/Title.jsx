import styles from "./Title.module.css"
import Typography from "../Typography/Typography"
function Title() {
  return (
    <div className={styles.titleContainer}>
      <Typography fontSize={24} bold>
        Simple ToDoList
      </Typography>
    </div>
  )
}

export default Title