import { startOfToday, endOfToday } from 'date-fns'
import { useState } from 'react'
import useSWR from 'swr'
import Layout from '../containers/layout'
import { submitNewTask, deleteTask, putTask } from '../utils/apiRequests'
import TaskTitleInput from '../elements/taskTitleInput'
import SubmitButton from '../elements/submitButton'
import TaskCard from '../components/taskCard'

import { serverUrl } from '../config'
import { serverToCalendarFormat } from '../utils/utilFunctions'

const fetcher = url => fetch(url).then(r => r.json())

export default function Today () {
  const [taskText, setTaskText] = useState('')

  const dayStart = startOfToday().toISOString()
  const dayEnd = endOfToday().toISOString()

  const { data, mutate } = useSWR(
    `${serverUrl}/api/v1/tasks?start_date=${dayStart}&end_date=${dayEnd}`,
    fetcher
  )
  const tasks = data ? data.map(task => serverToCalendarFormat(task)) : []

  const handleSubmit = async e => {
    e.preventDefault()
    const task = {
      title: taskText,
      start: new Date(),
      end: new Date(),
      completed: false
    }
    const newTask = await submitNewTask(task)
    setTaskText('')
    mutate([...data, newTask])
  }

  const updateTask = async (id, task) => {
    const newTask = await putTask(id, task)
    mutate([...data, newTask])
  }

  const handleTaskDelete = async id => {
    await deleteTask(id)
  }

  return (
    <Layout title="Today's Tasks">
      <div>
        <form
          className='text-center grid grid-cols-2 gap-4 py-4'
          onSubmit={handleSubmit}
        >
          <TaskTitleInput
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
          />
          <SubmitButton disabled={!taskText} />
        </form>
        <div className='grid grid-cols-3 gap-4 p-4'>
          {tasks.map(task => (
            <TaskCard
              task={task}
              updateTask={updateTask}
              deleteTask={handleTaskDelete}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
