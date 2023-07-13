import Container from "../container/container"
import TaskGridItem from "../taskGridItem/tasksGridItem"
import style from './tasksGrid.module.css'
import { TaskType } from "../../types/TaskType"

const listTypes = [
    { name: 'Tasks to do', type: TaskType['TODO'] },
    { name: 'Tasks in progress', type: TaskType['PROGRESS'] },
    { name: 'Completed tasks', type: TaskType['FINISHED'] }
]

function TasksGrid({ tasks, setTasks }) {
    return (
        <Container>
            <div className={style.tasks__container}>
                {listTypes.map(el => {
                    return (
                        <TaskGridItem
                            key={el.name}
                            name={el.name}
                            tasks={tasks}
                            type={el.type}
                            setTasks={setTasks}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default TasksGrid