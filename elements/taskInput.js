import { useState } from 'react'

export default function TaskInput ({ task, updateTask }) {
  const [taskText, setTaskText] = useState(task.title)

  const handleSubmit = async e => {
    e.preventDefault()
    await updateTask(task.id, { ...task, title: taskText })
    setTaskText('')
  }

  return (
    <form onSubmit={handleSubmit} className='m-2 py-2 px-4'>
      {task.completed ? (
        <input
          type='text'
          placeholder={task.title}
          className='bg-gray-200 line-through'
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
      ) : (
        <input
          type='text'
          placeholder={task.title}
          className='bg-gray-200'
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
      )}
    </form>
  )
}
