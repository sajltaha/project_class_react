import TaskBox from '../taskBox/taskBox'
import style from './tasksGridItem.module.css'

function TaskGridItem({ name, tasks, type, setTasks }) {
    return (
        <div className={style.tasks__grid__item}>
            <div className={style.tasks__header}>
                {name}
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexFlow: 'column',
                    marginTop: '12px'
                }}>
                {tasks.map(task => {
                    return (
                        task.type === type &&
                        <TaskBox
                            key={task.id}
                            value={task.value}
                            id={task.id}
                            setTasks={setTasks}
                            tasks={tasks}
                            type={task.type}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TaskGridItem