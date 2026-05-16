import styles from "./Dropdown.module.css"
import arrow from "../../assets/arrow.svg"
import{ categories } from "../../utils/categories"
import { useState } from "react"

function Dropdown({ setTaskData, taskData }) {
  const[openedDropdown, setOpenDropdown] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={() => setOpenDropdown(!openedDropdown)}>
        <p>{ taskData.category? taskData.category : "Select a category"}</p> <img src={arrow} alt="arrow" />
      </div>
      {openedDropdown && (
        <div className={styles.dropdownContent}>
        {categories.map((category) => (
          <p key={category.name} onClick={(e) => {
            setTaskData({...taskData, category: e.target.innerHTML});
            setOpenDropdown(false)
        }
          }>
              {category.name}
          </p>
          ))}
      </div>
      )}
    </div>
  )
}

export default Dropdown