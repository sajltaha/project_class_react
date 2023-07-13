import style from './taskBox.module.css'
import { HiArrowSmRight } from 'react-icons/hi'
import { MdDeleteOutline } from 'react-icons/md'

function TaskBox({ value, id, setTasks }) {
    const deleteItem = e => {
        console.log(id)
        setTasks(currval => {
            return (
                currval.filter(task => task.id !== id)
            )
        })
    }

    return (
        <div className={style.task__box}>
            <div>
                {value}
            </div>
            <button onClick={deleteItem}>
                <MdDeleteOutline />
            </button>
            <button className={style.input__add__button}>
                <HiArrowSmRight />
            </button>
        </div>
    )
}

export default TaskBox