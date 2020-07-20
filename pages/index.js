import { useState } from 'react'
import useSWR from 'swr'
import Layout from '../containers/layout'
import SubmitButton from '../elements/submitButton'
import TaskTitleInput from '../elements/taskTitleInput'
import TaskDateInput from '../elements/taskDateInput'
import { submitNewTask } from '../utils/apiRequests'
import { serverUrl } from '../config'
import { serverToCalendarFormat } from '../utils/utilFunctions'

import Calendar from '../components/calendar'

const fetcher = url => fetch(url).then(r => r.json())

export default function IndexPage () {
  const [noteText, setNoteText] = useState('')
  const [noteDate, setNoteDate] = useState()

  const { data, mutate } = useSWR(`${serverUrl}/api/v1/tasks`, fetcher)
  const tasks = data ? data.map(task => serverToCalendarFormat(task)) : []

  const handleSubmit = async e => {
    e.preventDefault()
    const task = {
      title: noteText,
      start: noteDate,
      end: noteDate,
      completed: false
    }
    await submitNewTask(task)
    setNoteText('')
    mutate([...data, task])
  }

  return (
    <Layout title='Task Calendar'>
      <form
        className='text-center grid grid-cols-3 gap-4 py-4'
        onSubmit={handleSubmit}
      >
        <TaskTitleInput
          value={noteText}
          onChange={e => setNoteText(e.target.value)}
        />
        <TaskDateInput
          value={noteDate}
          onChange={e => setNoteDate(e.target.value)}
        />
        <SubmitButton disabled={!noteText || !noteDate} />
      </form>
      {tasks ? <Calendar tasks={tasks} /> : <Calendar tasks={[]} />}
    </Layout>
  )
}
