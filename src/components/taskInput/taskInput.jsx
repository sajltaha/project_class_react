import Container from '../container/container'
import style from './taskInput.module.css'
import { IoIosAdd } from 'react-icons/io'
import { useState } from 'react'
import { TaskType } from '../../types/TaskType'

function TaskInput({ setTasks, tasks }) {
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        if (tasks.length === 0 && inputValue) {
            const newTask = {
                id: 1,
                value: inputValue,
                creationTime: new Date(),
                type: TaskType['TODO']
            }
            setTasks([newTask])
            localStorage.setItem('data', JSON.stringify([newTask]))
            setInputValue('')
        }
        else if (tasks.length !== 0 && inputValue) {
            const newTask = {
                id: tasks[tasks.length - 1].id + 1,
                value: inputValue,
                creationTime: new Date(),
                type: TaskType['TODO']
            }
            setTasks(currVal => {
                return [...currVal, newTask]
            })
            localStorage.setItem('data', JSON.stringify([...tasks, newTask]))
            setInputValue('')
        }
    }
    return (
        <Container>
            <div
                style={{
                    marginBottom: '12px',
                    height: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <input className={style.task__input} value={inputValue} placeholder='Write smthng' type="text" onChange={inputChangeHandler} />
                <button className={style.input__add__button} onClick={handleClick}>
                    <IoIosAdd />
                </button>
            </div>
        </Container>
    )
}

export default TaskInput