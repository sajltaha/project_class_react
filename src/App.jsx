import Header from "./components/header/header";
import './global.css'
import TasksGrid from "./components/tasksGrid/tasksGrid";
import TaskInput from "./components/taskInput/taskInput";
import { useEffect, useState } from "react";
import { dbTasks } from "./database";

function App() {
  const [tasks, setTasks] = useState(dbTasks)
  useEffect(() => {
    console.log(tasks)
    console.log('Component did mount')
  }, [tasks])
  return (
    <>
      <Header />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TasksGrid tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;