import React, { useState } from 'react'

interface task{
    onAddtask:any
}

export const AddTask:React.FC<task> = ({onAddtask}) => {
  const [task, setTask] = useState<string>()
  const [day, setDay] = useState<string>('')
  const [reminder, setReminder] = useState<any>(false)
  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    if (!task) {
      alert('Please add a task')
      return
    }
    onAddtask({ task, day, reminder })
    setTask('')
    setDay('')
    setReminder('')
    console.log(setTask)
    console.log(day)
  }
  
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          name='task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add Task'
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          name='day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder='Add Day & Time'
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
     <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
