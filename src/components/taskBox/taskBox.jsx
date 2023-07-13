import style from './taskBox.module.css'
import { HiArrowSmRight } from 'react-icons/hi'
import { MdDeleteOutline } from 'react-icons/md'
import { TaskType } from '../../types/TaskType'

function TaskBox({ value, id, setTasks, type }) {
    
    const deleteItem = () => {
        setTasks(currval => {
            return (
                currval.filter(task => task.id !== id)
            )
        })
    }

    const changeTypeTodo = () => {
        setTasks(currval => {
            return (
                currval.map(task => {
                    if (task.id === id && task.type === TaskType['TODO']) {
                        task.type = TaskType['PROGRESS']
                    }
                    return task
                })
            )
        })
    }

    const changeTypeProgress = () => {
        return (
            setTasks(currval => {
                return (
                    currval.map(task => {
                        if (task.id === id && task.type === TaskType['PROGRESS']) {
                            task.type = TaskType['FINISHED']
                        }
                        return task
                    })
                )
            })
        )
    }

    const changeTypeFinished = () => {
        return (
            setTasks(currval => {
                return (
                    currval.map(task => {
                        if (task.id === id && task.type === TaskType['FINISHED']) {
                            task.type = TaskType['PROGRESS']
                        }
                        return task
                    })
                )
            })
        )
    }

    return (
        <div className={style.task__box}>
            <div>
                {value}
            </div>
            <button onClick={deleteItem}>
                <MdDeleteOutline />
            </button>
            {type === TaskType['TODO'] &&
                <button className={style.input__add__button} onClick={changeTypeTodo}>
                    <HiArrowSmRight />
                </button>
            }
            {type === TaskType['PROGRESS'] &&
                <input className={style.input__add__button} type="checkbox" onChange={changeTypeProgress} />
            }
            {type === TaskType['FINISHED'] &&
                <input className={style.input__add__button} type="checkbox" defaultChecked onChange={changeTypeFinished}  />
            }
        </div>
    )
}

export default TaskBox