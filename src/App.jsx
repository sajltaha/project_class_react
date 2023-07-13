import Header from "./components/header/header";
import './global.css'
import TasksGrid from "./components/tasksGrid/tasksGrid";
import TaskInput from "./components/taskInput/taskInput";
import { useEffect, useState } from "react";
import { dbTasks } from "./database";

function App() {
  if (localStorage.getItem('data') === 'undefined' || localStorage.getItem('data') == undefined) {
    console.log(1)
    localStorage.setItem('data', JSON.stringify([]))
  }
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('data')))
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