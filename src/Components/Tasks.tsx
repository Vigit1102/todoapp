import React from 'react'
import { Task as TaskType } from '../App'
import { Task } from './Task'

interface taskProps {
    tasks: TaskType[],
    onDelete: (id: number) => void,
    onToggle: (id: number) => void
}

export const Tasks: React.FC<taskProps> = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )}
