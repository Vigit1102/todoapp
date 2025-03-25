import React from 'react'
import { FaTimes } from "react-icons/fa";

interface Taskprops {
    id: number;
    text: string;
    day: string;
    task:any;
    reminder: boolean;
  }
  
interface taskProps1 {
    task:Taskprops,
    onDelete: (id:number)=>void,
    onToggle:(id:number)=>void
    
}

export const Task:React.FC<taskProps1> = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.task}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={()=>onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}
