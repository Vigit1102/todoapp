import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Tasks } from './Components/Tasks';
import { AddTask } from './Components/AddTask';

export interface Task {
  id: number;
  text: string;
  day: string;
  task:any
  reminder: boolean;
}

function App() {
  const [show, setShow] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const deleteTask = (id:number): void => {
    setTasks(
      tasks.filter((task) => task.id !== id))
  }
  const onToggle = (id:number): void =>  {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )}
    const addTask = (task: Omit<Task, 'id'>): void => {
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTask: Task = { id, ...task };
      setTasks([...tasks, newTask]); };

  return (
    <div className="container">
     <Header 
      onAdd={() => setShow(!show)} 
      showform={show} />
      {show && 
      <AddTask onAddtask={addTask} />}
      {tasks.length > 0 ?
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={onToggle} /> :
        "No Task"
      }
    </div>
  );
}

export default App;
